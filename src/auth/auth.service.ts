import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly prisma: PrismaService,
  ) {}

  private generateJwt(payload: Record<string, any>) {
    return this.jwtService.sign(payload);
  }

  async signIn(googleUser: { email: string; name: string; avatar?: string }) {
    if (!googleUser) {
      throw new BadRequestException('Unauthenticated');
    }

    let user = await this.prisma.user.findUnique({
      where: { email: googleUser.email },
    });

    if (!user) {
      user = await this.createUser(googleUser);
    }

    return this.generateJwt({
      id: user.id,
      email: user.email,
      role: user.role,
    });
  }

  private async createUser(data: {
    email: string;
    name: string;
    avatar?: string;
  }) {
    try {
      return await this.prisma.user.create({
        data: {
          email: data.email,
          name: data.name,
          avatar: data.avatar,
          role: 'User',
        },
      });
    } catch (error) {
      console.error('Error creating user:', error);
      throw new InternalServerErrorException();
    }
  }
}
