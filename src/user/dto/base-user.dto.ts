import { IsString, IsOptional, IsNotEmpty } from 'class-validator';

export class BaseUserDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsOptional()
  email?: string;
}
