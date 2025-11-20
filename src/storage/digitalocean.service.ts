// src/storage/digitalocean.service.ts
import { Injectable, InternalServerErrorException } from '@nestjs/common';
import {
  S3Client,
  PutObjectCommand,
  DeleteObjectCommand,
} from '@aws-sdk/client-s3';
import { randomUUID } from 'crypto';

@Injectable()
export class DigitalOceanService {
  private s3: S3Client;
  private readonly bucketName: string;
  private readonly region: string;

  constructor() {
    this.bucketName = process.env.DO_SPACE_BUCKET!;
    this.region = process.env.DO_SPACE_REGION!;
    this.s3 = new S3Client({
      endpoint: `https://${process.env.DO_SPACE_ENDPOINT}`, // e.g. nyc3.digitaloceanspaces.com
      region: this.region,
      credentials: {
        accessKeyId: process.env.DO_SPACE_ACCESS_KEY_ID!,
        secretAccessKey: process.env.DO_SPACE_SECRET_ACCESS_KEY!,
      },
    });
  }

  async uploadFile(
    fileBuffer: Buffer,
    fileName: string,
    mimeType: string,
    tenantId: string,
  ): Promise<string> {
    const key = `${tenantId}/${randomUUID()}-${fileName}`;
    try {
      const command = new PutObjectCommand({
        Bucket: this.bucketName,
        Key: key,
        Body: fileBuffer,
        ContentType: mimeType,
        ACL: 'public-read', // so the file is publicly accessible
      });

      await this.s3.send(command);

      // Return the public URL of the file
      return `https://${this.bucketName}.${process.env.DO_SPACE_ENDPOINT}/${key}`;
    } catch (error) {
      throw new InternalServerErrorException(
        'Failed to upload file to DigitalOcean Spaces',
      );
    }
  }

  async deleteFileByKey(key: string): Promise<void> {
    try {
      const command = new DeleteObjectCommand({
        Bucket: this.bucketName,
        Key: key,
      });

      await this.s3.send(command);
    } catch (error) {
      throw new InternalServerErrorException(
        'Failed to delete file from DigitalOcean Spaces',
      );
    }
  }

  extractKeyFromUrl(url: string): string | null {
    // Given a URL like https://bucket.region.digitaloceanspaces.com/key
    // extract 'key'
    try {
      const urlObj = new URL(url);
      // URL pathname starts with '/', remove it
      return urlObj.pathname.slice(1);
    } catch {
      return null;
    }
  }
}
