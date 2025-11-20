import {
  Controller,
  Get,
  Post,
  Body,
  UseGuards,
  Param,
  ParseIntPipe,
  Put,
  Req,
  Query,
} from '@nestjs/common';
import { GameService } from './game.service';
import { SuperGuard } from 'src/auth/super.guard';
@Controller('game')
export class GameController {
  constructor(private readonly gameService: GameService) {}

  @UseGuards(SuperGuard)
  @Get('/all')
  async findMyGames(@Req() req) {
    const userId = req.user.id;
    return await this.gameService.findMyGames(userId);
  }

  @Get('categories')
  async findAllCategories(@Req() req) {
    return await this.gameService.findAllCategories();
  }

  @UseGuards(SuperGuard)
  @Get('questions')
  async findAllQuestions(@Req() req, @Query() query: { categoryId: string }) {
    return await this.gameService.findAllQuestions(query.categoryId);
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

  @UseGuards(SuperGuard)
  @Post('category')
  async createCategory(
    @Req() req,
    @Body() body: { name: string; imageUrl: string },
  ) {
    return await this.gameService.createCategory(body);
  }

  @UseGuards(SuperGuard)
  @Post(':gameQuestionId/answer')
  async answerQuestion(
    @Req() req,
    @Param('gameQuestionId') gameQuestionId: string,
    @Body() body: { teamId?: string },
  ) {
    return await this.gameService.answerQuestion(gameQuestionId, body.teamId);
  }

  @UseGuards(SuperGuard)
  @Post('question')
  async createQuestion(
    @Req() req,
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
}
