import { Module } from '@nestjs/common';
import { AiService } from './ai.service';
import { AIController } from './ai.controller';
import { JwtModule } from '@nestjs/jwt';
import { StorageModule } from 'src/storage/storage.module';

@Module({
  imports: [JwtModule, StorageModule],
  providers: [AiService],
  controllers: [AIController],
})
export class AiModule {}
