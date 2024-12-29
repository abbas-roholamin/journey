import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType({ description: 'A coffee entity' })
export class Coffee {
  @Field(() => ID, { description: 'The id of the coffee' })
  id: number;
  name: string;
  brand: string;
  flavors: string[];
}
