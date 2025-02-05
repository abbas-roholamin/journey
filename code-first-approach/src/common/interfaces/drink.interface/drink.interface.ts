import { Field, InterfaceType } from '@nestjs/graphql';

@InterfaceType({ description: 'A drink that can be consumed' })
export abstract class Drink {
  @Field(() => String, { description: 'The name of the drink' })
  name: string;
}
