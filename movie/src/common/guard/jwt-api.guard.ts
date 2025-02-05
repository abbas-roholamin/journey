import { AuthGuard } from '@nestjs/passport';

export class JwtApiGuard extends AuthGuard('jwt') {
  constructor() {
    super();
  }
}
