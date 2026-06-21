import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateSuggestionDto } from './create-suggestion.dto';

@Injectable()
export class SuggestionService {
  constructor(private readonly prisma: PrismaService) {}

  async create(dto: CreateSuggestionDto, userId: string) {
    return this.prisma.suggestion.create({ data: { ...dto, userId } });
  }

  async findAll() {
    return this.prisma.suggestion.findMany({
      orderBy: { createdAt: 'desc' },
      include: {
        user: { select: { id: true, name: true, email: true } },
        gameQuestion: {
          include: {
            question: { select: { text: true, answer: true, points: true } },
            category: { select: { name: true } },
          },
        },
      },
    });
  }

  async resolve(id: string) {
    const suggestion = await this.prisma.suggestion.findUnique({
      where: { id },
    });
    if (!suggestion) throw new NotFoundException('Suggestion not found');

    return this.prisma.suggestion.update({
      where: { id },
      data: { status: 'Resolved' },
    });
  }
}
