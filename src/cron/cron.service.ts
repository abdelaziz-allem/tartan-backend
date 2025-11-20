import { Injectable, Logger } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { NotificationService } from 'src/notification/notification.service';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CronService {
  private readonly logger = new Logger(CronService.name);

  constructor(
    private readonly prisma: PrismaService,
    private readonly notificationService: NotificationService,
  ) {}

  // @Cron(CronExpression.EVERY_DAY_AT_MIDNIGHT)
  // async cleanUpTasks() {
  //   try {
  //     await this.prisma.$transaction(async (tx) => {
  //       // 1️⃣ Delete expired task assignments (endAt = today)
  //       await tx.taskAssignment.deleteMany({
  //         where: {
  //           endAt: {
  //             gte: new Date(new Date().setHours(0, 0, 0, 0)), // start of today
  //             lt: new Date(new Date().setHours(23, 59, 59, 999)), // end of today
  //           },
  //         },
  //       });
  //       await tx.task.deleteMany({
  //         where: {
  //           assignees: {
  //             none: {},
  //           },
  //         },
  //       });

  //       await tx.substitute.deleteMany({
  //         where: {
  //           dueDate: {
  //             gte: new Date(new Date().setHours(0, 0, 0, 0)), // start of today
  //             lt: new Date(new Date().setHours(23, 59, 59, 999)), // end of today
  //           },
  //         },
  //       });

  //       this.logger.log(`🧹 Cleanup completed`);
  //     });
  //   } catch (err) {
  //     this.logger.error('❌ Daily cleanup cron failed', err);
  //   }
  // }
}
