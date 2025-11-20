import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import * as webpush from 'web-push';

@Injectable()
export class NotificationService {
  constructor(private prisma: PrismaService) {
    // Configure VAPID details
    webpush.setVapidDetails(
      'mailto:admin@dugsify.com',
      process.env.VAPID_PUBLIC_KEY!,
      process.env.VAPID_PRIVATE_KEY!,
    );
  }

  async sendNotificationToUser(
    userId: string,
    title: string,
    body: string,
    url?: string, // optional route
  ) {
    const subscriptions = await this.prisma.notification.findMany({
      where: { userId },
    });

    const payload = JSON.stringify({
      title,
      body,
      icon: '/icon.png',
      url: url || '/auth/login',
    });

    for (const sub of subscriptions) {
      const pushSub = {
        endpoint: sub.endpoint,
        keys: { auth: sub.auth, p256dh: sub.p256dh },
      };

      try {
        await webpush.sendNotification(pushSub, payload);
      } catch (err: any) {
        console.error('Notification failed:', err.statusCode, err.body);
        if (err.statusCode === 410 || err.statusCode === 404) {
          await this.prisma.notification.delete({
            where: { endpoint: sub.endpoint },
          });
        }
      }
    }
  }

  async sendNotificationToAll(title: string, body: string) {
    const all = await this.prisma.notification.findMany();
    for (const sub of all) {
      await this.sendNotificationToUser(sub.userId, title, body);
    }
  }
}
