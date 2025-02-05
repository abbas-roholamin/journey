import { ForbiddenException, Injectable } from '@nestjs/common';
import LoginDto from './dto/login.dto';
import RegisterDto from './dto/register.dto';
import * as argon from 'argon2';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { PrismaService } from '../prisma/prisma.service';
@Injectable()
export class AuthService {
  constructor(
    private prismaService: PrismaService,
    private jwtService: JwtService,
    private configService: ConfigService,
  ) {}
  async login(loginDto: LoginDto): Promise<{ access_token: string }> {
    const user = await this.prismaService.user.findUnique({
      where: {
        email: loginDto.email,
      },
    });

    if (!user) {
      throw new ForbiddenException('User not found');
    }

    const isPasswordMatch = await argon.verify(user.hash, loginDto.password);
    if (!isPasswordMatch) {
      throw new ForbiddenException('Incorrect password');
    }

    const payload = { sub: user.id, email: user.email };
    const token = await this.jwtService.signAsync(payload, {
      expiresIn: '15m',
      secret: this.configService.get('JWT_SECRET'),
    });

    return {
      access_token: token,
    };
  }

  async register(registerDto: RegisterDto) {
    const hash = await argon.hash(registerDto.password);

    try {
      const newUser = await this.prismaService.user.create({
        data: {
          email: registerDto.email,
          first_name: registerDto.first_name,
          last_name: registerDto.last_name,
          hash: hash,
        },
      });

      return newUser;
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
        if (error.code === 'P2002') {
          throw new ForbiddenException('Email already exists');
        }

        throw error;
      }
    }
  }

  logout() {
    return 'logout';
  }
}
