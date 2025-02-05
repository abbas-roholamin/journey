import { Query, Resolver } from '@nestjs/graphql';
import { Coffee } from 'src/coffee/entities/coffee.entity/coffee.entity';
// import { Drink } from 'src/common/interfaces/drink.interface/drink.interface';
import { DrinkResultUnion } from 'src/common/unions/drink-result.union';
import { Tee } from 'src/tee/entities/tee.entity/tee.entity';

@Resolver()
export class DrinksResolver {
  @Query(() => [DrinkResultUnion], { name: 'drinks' })
  async findAll(): Promise<(typeof DrinkResultUnion)[]> {
    const coffee = new Coffee();
    coffee.id = 1;
    coffee.name = 'Coffee 1';
    coffee.brand = 'Brand 1';

    const tee = new Tee();
    tee.name = 'Tee 1';

    return [coffee, tee];
  }
}
