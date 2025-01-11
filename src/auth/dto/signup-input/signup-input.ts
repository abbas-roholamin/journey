import { InputType } from '@nestjs/graphql';
import { CreateUserInput } from 'src/user/dto/create-user.input/create-user.input';

@InputType({ description: 'Signin input' })
export class SignupInput extends CreateUserInput {}
