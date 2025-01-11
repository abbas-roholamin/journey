import { InputType } from '@nestjs/graphql';
import { IsEmail, MinLength } from 'class-validator';

@InputType({ description: 'The user input' })
export class CreateUserInput {
  @MinLength(3)
  name: string;

  @IsEmail()
  email: string;

  @MinLength(8)
  password: string;
}
