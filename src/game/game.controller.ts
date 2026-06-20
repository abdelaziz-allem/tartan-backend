import {
  Controller,
  Get,
  Post,
  Patch,
  Body,
  UseGuards,
  Param,
  Req,
  Query,
} from '@nestjs/common';
import { GameService } from './game.service';
import { SuperGuard } from 'src/auth/super.guard';

@Controller('game')
export class GameController {
  constructor(private readonly gameService: GameService) {}

  // ─── Categories ──────────────────────────────────────────────────────────

  @Get('categories')
  async findAllCategories() {
    return await this.gameService.findAllCategories();
  }

  @UseGuards(SuperGuard)
  @Post('category')
  async createCategory(@Body() body: { name: string; imageUrl: string }) {
    return await this.gameService.createCategory(body);
  }

  // ─── Questions ───────────────────────────────────────────────────────────

  @UseGuards(SuperGuard)
  @Get('questions')
  async findAllQuestions(
    @Query()
    query: {
      categoryId: string;
      page?: string;
      limit?: string;
      search?: string;
    },
  ) {
    const page = parseInt(query.page) || 1;
    const limit = parseInt(query.limit) || 10;
    return await this.gameService.findAllQuestions(
      query.categoryId,
      page,
      limit,
      query.search,
    );
  }

  @UseGuards(SuperGuard)
  @Post('question')
  async createQuestion(
    @Body()
    body: {
      categoryId: string;
      text: string;
      answer: string;
      points: number;
      imageUrl?: string;
      videoUrl?: string;
      answerFileUrl?: string;
      answerFileType?: string;
    },
  ) {
    return await this.gameService.createQuestion(body);
  }

  @UseGuards(SuperGuard)
  @Patch('question/:id')
  async updateQuestion(
    @Param('id') id: string,
    @Body()
    body: {
      text?: string;
      answer?: string;
      points?: number;
      fileUrl?: string;
      fileType?: string;
      answerFileUrl?: string;
      answerFileType?: string;
    },
  ) {
    return await this.gameService.updateQuestion(id, body);
  }

  // ─── Analytics ───────────────────────────────────────────────────────────

  @UseGuards(SuperGuard)
  @Get('analytics')
  async getAnalytics() {
    return await this.gameService.getAnalytics();
  }

  // ─── Game ────────────────────────────────────────────────────────────────

  @UseGuards(SuperGuard)
  @Get('all')
  async findMyGames(@Req() req) {
    return await this.gameService.findMyGames(req.user.id);
  }

  @UseGuards(SuperGuard)
  @Post('start')
  async startGame(
    @Req() req,
    @Body()
    body: {
      gameName: string;
      teamA: string;
      teamB: string;
      teamAColor: string;
      teamBColor: string;
      categories: string[];
    },
  ) {
    return await this.gameService.startGame(req.user.id, body);
  }

  // ─── Teams ───────────────────────────────────────────────────────────────

  @UseGuards(SuperGuard)
  @Post('switch-turn')
  async switchTurn(@Body() body: { gameId: string }) {
    return await this.gameService.switchTurn(body.gameId);
  }

  @UseGuards(SuperGuard)
  @Post('increment-team-score')
  async incrementTeamScore(
    @Body() body: { teamId: string; amount: 100 | -100 },
  ) {
    return await this.gameService.incrementTeamScore(body);
  }

  // ─── Param Routes (always last) ──────────────────────────────────────────

  @UseGuards(SuperGuard)
  @Post(':gameQuestionId/answer')
  async answerQuestion(
    @Param('gameQuestionId') gameQuestionId: string,
    @Body() body: { teamId?: string },
  ) {
    return await this.gameService.answerQuestion(gameQuestionId, body.teamId);
  }

  @UseGuards(SuperGuard)
  @Get(':gameId/teams')
  async findTeams(@Param('gameId') gameId: string) {
    return await this.gameService.findTeams(gameId);
  }

  @UseGuards(SuperGuard)
  @Get(':id')
  async findGame(@Param('id') id: string) {
    return await this.gameService.findGame(id);
  }
}
