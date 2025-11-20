import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { AiModule } from './ai/ai.module';

import { StorageModule } from './storage/storage.module';

import { ScheduleModule as CronjobModule } from '@nestjs/schedule';
import { CronModule } from './cron/cron.module';

import { NotificationModule } from './notification/notification.module';
import { GameModule } from './game/game.module';

@Module({
  imports: [
    AuthModule,
    PrismaModule,
    UserModule,
    NotificationModule,
    AiModule,
    StorageModule,
    GameModule,
    CronjobModule.forRoot(),
    CronModule,
  ],
})
export class AppModule {}
