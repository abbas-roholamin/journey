import { Module } from '@nestjs/common';
import { CoffeeResolver } from './coffee.resolver';
import { CoffeeService } from './coffee.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Coffee } from './entities/coffee.entity/coffee.entity';
import { Flavor } from './entities/flavor.entity/flavor.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Coffee, Flavor])],
  providers: [CoffeeResolver, CoffeeService],
})
export class CoffeeModule {}
