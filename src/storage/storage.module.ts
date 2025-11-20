// src/storage/storage.module.ts
import { Module } from '@nestjs/common';
import { StorageController } from './storage.controller';
import { StorageService } from './storage.service';
import { DigitalOceanService } from './digitalocean.service';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [JwtModule],
  controllers: [StorageController],
  providers: [StorageService, DigitalOceanService],
  exports: [StorageService],
})
export class StorageModule {}
