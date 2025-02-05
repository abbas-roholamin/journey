import { Module } from '@nestjs/common';
import { CoffeeResolver } from './coffee.resolver';
import { CoffeeService } from './coffee.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Coffee } from './entities/coffee.entity/coffee.entity';
import { Flavor } from './entities/flavor.entity/flavor.entity';
import { CoffeeFlavorsResolver } from './coffee-flavors.resolver';
import { PubSubModule } from 'src/pub-sub/pub-sub.module';
import { FlavorsByCoffeeLoader } from './data-loader/flavors-by-coffee.loader/flavors-by-coffee.loader';

@Module({
  imports: [TypeOrmModule.forFeature([Coffee, Flavor]), PubSubModule],
  providers: [
    CoffeeResolver,
    CoffeeService,
    CoffeeFlavorsResolver,
    FlavorsByCoffeeLoader,
  ],
})
export class CoffeeModule {}
