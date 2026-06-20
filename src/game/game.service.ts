import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Game, Team } from '@prisma/client';

@Injectable()
export class GameService {
  constructor(private readonly prisma: PrismaService) {}

  async getAnalytics() {
    const [
      totalUsers,
      totalGames,
      totalQuestions,
      totalCategories,
      gamesFinished,
      categoryUsage,
      recentGames,
    ] = await Promise.all([
      this.prisma.user.count(),
      this.prisma.game.count(),
      this.prisma.question.count(),
      this.prisma.category.count(),
      this.prisma.game.count({ where: { isFinished: true } }),
      this.prisma.gameQuestion.groupBy({
        by: ['categoryId'],
        _count: { id: true },
        orderBy: { _count: { id: 'desc' } },
      }),
      this.prisma.game.findMany({
        take: 7,
        orderBy: { createdAt: 'desc' },
        include: {
          teams: { orderBy: { position: 'asc' } },
          _count: { select: { gameQuestions: true } },
        },
      }),
    ]);

    const categoryIds = categoryUsage.map((c) => c.categoryId);
    const categories = await this.prisma.category.findMany({
      where: { id: { in: categoryIds } },
    });
    const categoryMap = new Map(categories.map((c) => [c.id, c.name]));

    return {
      totalUsers,
      totalGames,
      totalQuestions,
      totalCategories,
      gamesFinished,
      gamesInProgress: totalGames - gamesFinished,
      categoryUsage: categoryUsage.map((c) => ({
        name: categoryMap.get(c.categoryId) || c.categoryId,
        count: c._count.id,
      })),
      recentGames: recentGames.map((g) => ({
        id: g.id,
        name: g.name,
        isFinished: g.isFinished,
        createdAt: g.createdAt,
        teams: g.teams.map((t) => ({ name: t.name, score: t.score })),
        totalQuestions: g._count.gameQuestions,
      })),
    };
  }

  async findMyGames(userId: string): Promise<any[]> {
    return await this.prisma.game.findMany({
      where: {
        userId,
      },
    });
  }

  async findAllCategories(): Promise<any[]> {
    return await this.prisma.category.findMany({
      include: {
        _count: {
          select: {
            questions: true,
          },
        },
      },
    });
  }

  async findAllQuestions(
    categoryId: string,
    page: number = 1,
    limit: number = 10,
    search?: string,
  ): Promise<{ data: any[]; total: number; page: number; totalPages: number }> {
    const skip = (page - 1) * limit;
    const where: any = { categoryId };

    if (search) {
      where.text = { contains: search, mode: 'insensitive' };
    }

    const [data, total] = await Promise.all([
      this.prisma.question.findMany({
        where,
        skip,
        take: limit,
        orderBy: { points: 'asc' },
      }),
      this.prisma.question.count({ where }),
    ]);

    return { data, total, page, totalPages: Math.ceil(total / limit) };
  }

  async findGame(id: string): Promise<any[]> {
    try {
      return await this.prisma.gameQuestion.findMany({
        where: {
          gameId: id,
        },
        include: {
          question: true,
          category: true,
          game: true,
        },

        orderBy: [
          { category: { name: 'asc' } }, // categories grouped predictably
          { points: 'asc' }, // keeps 100 → 200 → 300 → 400 → 500
          { id: 'asc' }, // ensures consistent order when points match
        ],
      });
    } catch (error) {
      throw new NotFoundException('Subject not found');
    }
  }

  async switchTurn(gameId: string): Promise<{ status: number }> {
    const game = await this.prisma.game.findUnique({
      where: { id: gameId },
      include: { teams: { orderBy: { position: 'asc' } } },
    });
    if (!game) throw new NotFoundException('Game not found');

    const next =
      game.teams[0].id === game.currentTurn
        ? game.teams[1].id
        : game.teams[0].id;

    await this.prisma.game.update({
      where: { id: gameId },
      data: { currentTurn: next },
    });
    return { status: 200 };
  }

  async incrementTeamScore({
    teamId,
    amount,
  }: {
    teamId: string;
    amount: 100 | -100;
  }): Promise<{ status: number }> {
    await this.prisma.team.update({
      where: { id: teamId },
      data: { score: { increment: amount } },
    });
    return { status: 201 };
  }

  async findTeams(gameId: string): Promise<Team[]> {
    try {
      return await this.prisma.team.findMany({
        where: {
          gameId,
        },
        orderBy: {
          position: 'asc',
        },
      });
    } catch (error) {
      throw new NotFoundException('Subject not found');
    }
  }

  async createCategory(data: {
    name: string;
    imageUrl: string;
  }): Promise<{ status: number }> {
    await this.prisma.category.create({
      data,
    });
    return { status: 201 };
  }

  async updateQuestion(
    id: string,
    data: {
      text?: string;
      answer?: string;
      points?: number;
      fileUrl?: string;
      fileType?: string;
      answerFileUrl?: string;
      answerFileType?: string;
    },
  ): Promise<{ status: number }> {
    const question = await this.prisma.question.findUnique({ where: { id } });
    if (!question) throw new NotFoundException('Question not found');

    await this.prisma.question.update({
      where: { id },
      data,
    });
    return { status: 200 };
  }

  async createQuestion(data: {
    categoryId: string;
    text: string;
    answer: string;
    points: number;
    imageUrl?: string;
    videoUrl?: string;
    answerFileUrl?: string;
    answerFileType?: string;
  }): Promise<{ status: number }> {
    await this.prisma.question.create({
      data,
    });
    return { status: 201 };
  }

  async answerQuestion(
    gameQuestionId: string,
    teamId?: string,
  ): Promise<{ status: number }> {
    const gameQuestion = await this.prisma.gameQuestion.update({
      where: {
        id: gameQuestionId,
      },
      data: {
        isActive: false,
        answeredBy: teamId,
        answeredAt: new Date(),
      },
    });

    const game = await this.prisma.game.findUnique({
      where: { id: gameQuestion.gameId },
      include: { teams: true },
    });

    const teams = game.teams;

    const current = game.currentTurn;
    const next = teams[0].id === current ? teams[1].id : teams[0].id;

    await this.prisma.game.update({
      where: { id: game.id },
      data: { currentTurn: next },
    });

    if (teamId) {
      await this.prisma.team.update({
        where: {
          id: teamId,
        },
        data: {
          score: {
            increment: gameQuestion.points,
          },
        },
      });
    }
    const checkIfGameIsFinished = await this.prisma.gameQuestion.findFirst({
      where: {
        gameId: game.id,
        isActive: true,
      },
    });
    if (!checkIfGameIsFinished) {
      await this.prisma.game.update({
        where: { id: game.id },
        data: { isFinished: true },
      });
    }
    return { status: 201 };
  }

  async startGame(
    userId: string,
    data: {
      gameName: string;
      teamA: string;
      teamB: string;
      teamAColor: string;
      teamBColor: string;
      categories: string[];
    },
  ): Promise<string> {
    // 1. Create the game
    const createdGame = await this.prisma.game.create({
      data: {
        userId,
        name: data.gameName,
      },
    });

    // 2. Create teams
    await this.prisma.team.createMany({
      data: [
        {
          gameId: createdGame.id,
          name: data.teamA,
          position: 1,
          color: data.teamAColor,
        },
        {
          gameId: createdGame.id,
          name: data.teamB,
          position: 2,
          color: data.teamBColor,
        },
      ],
    });

    // 3. Fetch the two teams so we can set the first turn
    const teams = await this.prisma.team.findMany({
      where: { gameId: createdGame.id },
      orderBy: {
        position: 'asc',
      },
    });

    const firstTeam = teams[0];

    // 4. Assign the turn to the first team
    await this.prisma.game.update({
      where: { id: createdGame.id },
      data: {
        currentTurn: firstTeam.id, // just storing the teamId
      },
    });

    // 3. For every category → fetch random questions
    const allGameQuestions: any[] = [];

    for (const categoryId of data.categories) {
      const randomSet = await this.getRandomQuestionsForCategory(categoryId);

      randomSet.forEach((q) => {
        allGameQuestions.push({
          gameId: createdGame.id,
          categoryId,
          questionId: q.id,
          points: q.points,
        });
      });
    }

    // 4. Insert into gameQuestions
    await this.prisma.gameQuestion.createMany({
      data: allGameQuestions,
    });

    return createdGame.id;
  }

  private async getRandomQuestionsForCategory(categoryId: string) {
    const all = await this.prisma.question.findMany({
      where: { categoryId },
    });

    const pickRandom = (arr: any[], count: number) =>
      arr.sort(() => Math.random() - 0.5).slice(0, count);

    return [
      ...pickRandom(
        all.filter((q) => q.points === 200),
        2,
      ),
      ...pickRandom(
        all.filter((q) => q.points === 400),
        2,
      ),
      ...pickRandom(
        all.filter((q) => q.points === 600),
        2,
      ),
    ];
  }
}
