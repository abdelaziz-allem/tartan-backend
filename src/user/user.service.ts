import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { notificationPayload } from 'src/utils/types';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  async findOneById(id: string): Promise<any> {
    try {
      return await this.prisma.user.findUnique({
        where: { id },
        select: {
          id: true,
          name: true,
          email: true,
        },
      });
    } catch (error) {
      throw new InternalServerErrorException('Failed to fetch');
    }
  }

  async findOne(email: string): Promise<any | null> {
    try {
      return await this.prisma.user.findUnique({
        where: { email },
        select: {
          id: true,
          name: true,
          email: true,
        },
      });
    } catch (error) {
      throw new InternalServerErrorException('Failed to fetch');
    }
  }

  async createNotification(
    userId: string,
    data: notificationPayload,
  ): Promise<{ status: number }> {
    try {
      await this.prisma.notification.create({
        data: {
          userId,
          endpoint: data.endpoint,
          p256dh: data.keys.p256dh,
          auth: data.keys.auth,
        },
      });
      return { status: 201 };
    } catch (error) {
      throw new InternalServerErrorException('Failed to create notification');
    }
  }
}
