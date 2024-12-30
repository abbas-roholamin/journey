import { Parent, ResolveField, Resolver } from '@nestjs/graphql';
import { Coffee } from './entities/coffee.entity/coffee.entity';
import { Flavor } from './entities/flavor.entity/flavor.entity';
// import { Repository } from 'typeorm';
// import { InjectRepository } from '@nestjs/typeorm';
import { FlavorsByCoffeeLoader } from './data-loader/flavors-by-coffee.loader/flavors-by-coffee.loader';

@Resolver(() => Coffee)
export class CoffeeFlavorsResolver {
  constructor(private readonly flavorLoader: FlavorsByCoffeeLoader) {}

  @ResolveField('flavors', () => [Flavor])
  async getCoffeeFlavors(@Parent() coffee: Coffee) {
    return this.flavorLoader.load(coffee.id);
  }
}
