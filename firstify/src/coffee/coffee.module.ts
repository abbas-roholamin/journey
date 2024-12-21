import { Module } from '@nestjs/common';
import { CoffeeController } from './coffee.controller';
import { CoffeeService } from './coffee.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Coffee } from './entities/coffee.entity';
import { Falvor } from './entities/falvor.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Coffee, Falvor])],
  controllers: [CoffeeController],
  providers: [CoffeeService],
})
export class CoffeeModule { }
