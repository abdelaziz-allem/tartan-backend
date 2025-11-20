import {
  Controller,
  Post,
  Body,
  UseGuards,
  BadRequestException,
  Get,
  Param,
  Query,
  Req,
} from '@nestjs/common';
import { AiService } from './ai.service';
import { SuperGuard } from 'src/auth/super.guard';

@Controller('ai')
export class AIController {
  constructor(private readonly aiService: AiService) {}
}
