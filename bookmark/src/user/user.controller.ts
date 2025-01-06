import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Request } from 'express';

@UseGuards(AuthGuard('jwt'))
@Controller('user')
export class UserController {
  @Get()
  get(@Req() req: Request) {
    return req.user;
  }
}
