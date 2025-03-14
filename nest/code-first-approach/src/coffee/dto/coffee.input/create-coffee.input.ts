import { Field, InputType } from '@nestjs/graphql';
import { MinLength } from 'class-validator';
import { CoffeeTypes } from 'src/common/enums/coffee-types.enum';

@InputType({ description: 'The input to create a coffee' })
export class CreateCoffeeInput {
  @MinLength(3)
  @Field(() => String, { description: 'The name of a coffee' })
  name: string;
  brand: string;
  flavors: string[];
  type: CoffeeTypes;
}
