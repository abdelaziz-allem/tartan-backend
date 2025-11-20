import { Expose, Exclude } from 'class-transformer';
import { IsOptional } from 'class-validator';

export class UserResponseDto {
  @Expose()
  id: string;

  @Expose()
  name: string;

  @Expose()
  email: string;

  @Exclude()
  createdAt?: Date;
}
