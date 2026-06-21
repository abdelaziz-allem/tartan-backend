import {
  Controller,
  Get,
  Post,
  Patch,
  Body,
  Param,
  UseGuards,
  Req,
  ForbiddenException,
} from '@nestjs/common';
import { SuggestionService } from './suggestion.service';
import { CreateSuggestionDto } from './create-suggestion.dto';
import { SuperGuard } from 'src/auth/super.guard';

@Controller('suggestions')
export class SuggestionController {
  constructor(private readonly suggestionService: SuggestionService) {}

  @UseGuards(SuperGuard)
  @Post()
  async create(@Body() dto: CreateSuggestionDto, @Req() req) {
    return this.suggestionService.create(dto, req.user.id);
  }

  @UseGuards(SuperGuard)
  @Get()
  async findAll(@Req() req) {
    if (req.user.role !== 'Admin') throw new ForbiddenException();
    return this.suggestionService.findAll();
  }

  @UseGuards(SuperGuard)
  @Patch(':id/resolve')
  async resolve(@Req() req, @Param('id') id: string) {
    if (req.user.role !== 'Admin') throw new ForbiddenException();
    return this.suggestionService.resolve(id);
  }
}
