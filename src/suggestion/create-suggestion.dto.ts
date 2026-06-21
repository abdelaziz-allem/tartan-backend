import { IsEnum, IsString, MinLength, IsOptional } from 'class-validator';
import { SuggestionType } from '@prisma/client';

export class CreateSuggestionDto {
  @IsEnum(SuggestionType)
  type: SuggestionType;

  @IsString()
  @MinLength(5)
  message: string;

  @IsString()
  @IsOptional()
  gameQuestionId?: string;
}
