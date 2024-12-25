import { Injectable, Module } from '@nestjs/common';
import { CoffeeController } from './coffee.controller';
import { CoffeeService } from './coffee.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Coffee } from './entities/coffee.entity';
import { Flavor } from './entities/flavor.entity';
import { Event } from 'src/events/entities/event.entity';
import { COFFEE_BRANDS } from './coffee.constant';
import { ConfigModule } from '@nestjs/config';
import coffeeConfig from './config/coffee.config';

class ConfigService {}
class DevelopmentConfig {}
class ProductionConfig {}

@Injectable()
export class CoffeeBrandFactory {
  create() {
    return ['buddy brew', 'nescafe'];
  }
}

@Module({
  imports: [
    TypeOrmModule.forFeature([Coffee, Flavor, Event]),
    ConfigModule.forFeature(coffeeConfig),
  ],
  controllers: [CoffeeController],
  providers: [
    CoffeeService,
    CoffeeBrandFactory,
    {
      provide: COFFEE_BRANDS,
      // useValue: ['buddy brew', 'nescafe'],
      useFactory: async (): Promise<string[]> => {
        const brands = await Promise.resolve(['buddy brew', 'nescafe']);
        return brands;
      },
    },
    {
      provide: ConfigService,
      useValue:
        process.env.NODE_ENV === 'dev' ? DevelopmentConfig : ProductionConfig,
    },
  ],
})
export class CoffeeModule {}
