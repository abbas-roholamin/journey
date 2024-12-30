import { Injectable, Scope } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
const DataLoader = require('dataloader');

import { Coffee } from 'src/coffee/entities/coffee.entity/coffee.entity';
import { Flavor } from 'src/coffee/entities/flavor.entity/flavor.entity';
import { In, Repository } from 'typeorm';

@Injectable({ scope: Scope.REQUEST })
export class FlavorsByCoffeeLoader extends DataLoader<number, Flavor[]> {
  constructor(
    @InjectRepository(Coffee)
    private readonly coffeeRepository: Repository<Coffee>,
  ) {
    super((keys) => this.batchLoadFn(keys));
  }

  private async batchLoadFn(keys: readonly number[]): Promise<Flavor[][]> {
    const coffeesFlavors = await this.coffeeRepository.find({
      select: ['id'],
      where: {
        id: In(keys as number[]),
      },
      relations: {
        flavors: true,
      },
    });
    return coffeesFlavors.map((coffee) => coffee.flavors);
  }
}
