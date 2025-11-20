// src/storage/dto/upload-file.dto.ts
import { IsNotEmpty } from 'class-validator';

export class UploadFileDto {
  @IsNotEmpty()
  file: Express.Multer.File;
}
