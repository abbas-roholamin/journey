import { Injectable } from '@nestjs/common';
import LoginDto from './dto/login.dto';
import RegisterDto from './dto/register.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import * as argon from 'argon2';
@Injectable()
export class AuthService {
  constructor(private prismaService: PrismaService) {}
  login(loginDto: LoginDto) {
    return loginDto;
  }

  async register(registerDto: RegisterDto) {
    const hash = await argon.hash(registerDto.password);

    const newUser = await this.prismaService.user.create({
      data: {
        email: registerDto.email,
        first_name: registerDto.first_name,
        last_name: registerDto.last_name,
        hash: hash,
      },
    });

    return newUser;
  }

  logout() {
    return 'logout';
  }
}
