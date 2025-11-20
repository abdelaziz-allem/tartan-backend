import {
  Controller,
  Get,
  Put,
  Body,
  UseGuards,
  Query,
  Req,
  Post,
  Param,
  BadRequestException,
} from '@nestjs/common';
import { UserService } from './user.service';
import { SuperGuard } from 'src/auth/super.guard';
import { UpdateUserDto } from './dto/update-user.dto';
import { notificationPayload, RequestUser } from 'src/utils/types';
import { UserResponseDto } from './dto/user-response.dto';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('user')
export class UsersController {
  constructor(private readonly userService: UserService) {}

  @UseGuards(SuperGuard)
  @Get('search')
  findOne(@Query('email') email: string): Promise<UserResponseDto | null> {
    if (!email) throw new BadRequestException('email is required');
    return this.userService.findOne(email);
  }

  @UseGuards(SuperGuard)
  @Get('me')
  findMe(@Req() req: RequestUser) {
    return req.user;
  }

  @UseGuards(SuperGuard)
  @Get(':id')
  findOneById(@Param('id') id: string) {
    return this.userService.findOneById(id);
  }

  @UseGuards(SuperGuard)
  @Post('notification')
  async createNotification(@Req() req, @Body() body: notificationPayload) {
    const userId = req.user.id;
    return await this.userService.createNotification(userId, body);
  }
}
