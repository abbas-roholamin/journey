import { Field, InputType } from '@nestjs/graphql';

@InputType({ description: 'The input to create a coffee' })
export class CreateCoffeeInput {
  @Field(() => String, { description: 'The name of a coffee' })
  name: string;
  brand: string;
  flavors: string[];
}
