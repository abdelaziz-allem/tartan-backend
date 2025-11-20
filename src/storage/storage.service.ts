// src/storage/storage.service.ts
import { Injectable, Logger } from '@nestjs/common';
import { DigitalOceanService } from './digitalocean.service';

@Injectable()
export class StorageService {
  private readonly logger = new Logger(StorageService.name);

  constructor(private readonly doService: DigitalOceanService) {}

  async uploadFile(
    tenantId: string,
    file: Express.Multer.File,
  ): Promise<string> {
    try {
      return await this.doService.uploadFile(
        file.buffer,
        file.originalname,
        file.mimetype,
        tenantId,
      );
    } catch (error) {
      this.logger.error('Error uploading file', error);
      throw new Error(`Upload failed: ${error.message || error}`);
    }
  }

  async deleteFile(url: string): Promise<void> {
    try {
      const key = this.doService.extractKeyFromUrl(url);
      if (!key) throw new Error('Invalid file URL');
      await this.doService.deleteFileByKey(key);
    } catch (error) {
      this.logger.error('Error deleting file', error);
      throw new Error(`Delete failed: ${error.message || error}`);
    }
  }
}
