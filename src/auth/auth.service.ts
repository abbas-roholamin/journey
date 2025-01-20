import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { LoginInput } from './dto/login-input/login-input';
import { SignupInput } from './dto/signup-input/signup-input';
import * as bycript from '../common/bycript';
import { JwtService } from '@nestjs/jwt';
import { AuthPayload } from './entities/auth-payload/auth-payload';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private jwtService: JwtService,
  ) {}

  async login(loginInput: LoginInput): Promise<AuthPayload> {
    const user = await this.userService.findOne({
      where: { email: loginInput.email },
    });

    const isPasswordValid = await bycript.validatePassword(
      loginInput.password,
      user.password,
    );

    if (!isPasswordValid) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const token = await this.generateToken({
      sub: user.id,
      email: user.email,
    });

    return {
      name: user.name,
      email: user.email,
      token,
    };
  }

  async signup(signupInput: SignupInput): Promise<AuthPayload> {
    const hashedPassword = await bycript.hashPassword(signupInput.password);
    const user = await this.userService.create({
      ...signupInput,
      password: hashedPassword,
    });

    const token = await this.generateToken({
      sub: user.id,
      email: user.email,
    });

    return {
      name: user.name,
      email: user.email,
      token,
    };
  }

  async generateToken({
    sub,
    email,
  }: {
    sub: number;
    email: string;
  }): Promise<string> {
    return await this.jwtService.signAsync({ sub, email });
  }
}
