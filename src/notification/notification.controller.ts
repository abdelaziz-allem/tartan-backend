import { Controller, Post, Body } from '@nestjs/common';
import { NotificationService } from './notification.service';

@Controller('notification')
export class NotificationController {
  constructor(private readonly notificationService: NotificationService) {}

  @Post('broadcast')
  async broadcast(@Body('body') body: string, @Body('title') title: string) {
    await this.notificationService.sendNotificationToAll(title, body);
    return { success: true };
  }
}
