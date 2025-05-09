import { Controller, Get, UseGuards } from '@nestjs/common';
import { User } from '@prisma/client';
import { GetUser } from '../auth/decorator';

import { JwtGuard } from '../auth/guard';

@UseGuards(JwtGuard)
@Controller('user')
export class UserController {
  @Get()
  get(@GetUser() user: User) {
    return user;
  }
}
