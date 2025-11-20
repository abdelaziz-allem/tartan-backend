// src/storage/storage.controller.ts
import {
  Controller,
  Post,
  UseInterceptors,
  UploadedFile,
  Body,
  BadRequestException,
  UseGuards,
  Req,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { StorageService } from './storage.service';
import { DeleteFileDto } from './dto/delete-file.dto';
import { SuperGuard } from 'src/auth/super.guard';

@Controller('upload')
export class StorageController {
  constructor(private readonly storageService: StorageService) {}

  @UseGuards(SuperGuard)
  @Post('file')
  @UseInterceptors(FileInterceptor('file'))
  async uploadDocument(@UploadedFile() file: Express.Multer.File, @Req() req) {
    const tenantId = req.user.tenantId;
    if (!file) throw new BadRequestException('File is required');
    const url = await this.storageService.uploadFile(tenantId, file);
    return { url };
  }

  @UseGuards(SuperGuard)
  @Post('delete')
  async deleteFile(@Body() deleteFileDto: DeleteFileDto) {
    await this.storageService.deleteFile(deleteFileDto.url);
    return { message: 'File deleted successfully' };
  }
}
