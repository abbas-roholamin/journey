import { Query, Resolver } from '@nestjs/graphql';
import { Drink } from 'src/common/interfaces/drink.interface/drink.interface';

@Resolver()
export class DrinksResolver {
  @Query(() => [Drink], { name: 'drinks' })
  findAll(): Drink[] {
    return [];
  }
}
