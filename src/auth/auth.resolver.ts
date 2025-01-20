import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { LoginInput } from './dto/login-input/login-input';
import { SignupInput } from './dto/signup-input/signup-input';
import { AuthPayload } from './entities/auth-payload/auth-payload';

@Resolver()
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @Mutation(() => AuthPayload, { name: 'login' })
  async login(@Args('loginInput') loginInput: LoginInput) {
    return this.authService.login(loginInput);
  }

  @Mutation(() => AuthPayload, { name: 'signup' })
  async signup(@Args('signupInput') signupInput: SignupInput) {
    return this.authService.signup(signupInput);
  }
}
