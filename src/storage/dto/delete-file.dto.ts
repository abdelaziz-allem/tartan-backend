import { IsNotEmpty, IsUrl } from 'class-validator';

export class DeleteFileDto {
  @IsNotEmpty()
  url: string;
}
