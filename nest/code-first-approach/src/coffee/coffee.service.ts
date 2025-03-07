import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCoffeeInput } from './dto/coffee.input/create-coffee.input';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Coffee } from './entities/coffee.entity/coffee.entity';
import { UpdateCoffeeInput } from './dto/update-coffee.input/update-coffee.input';
import { Flavor } from './entities/flavor.entity/flavor.entity';
import { PubSub } from 'graphql-subscriptions';

@Injectable()
export class CoffeeService {
  constructor(
    @InjectRepository(Coffee)
    private readonly coffeeRepository: Repository<Coffee>,
    @InjectRepository(Flavor)
    private readonly flavorRepository: Repository<Flavor>,
    private readonly pubsub: PubSub,
  ) {}
  findAll() {
    return this.coffeeRepository.find();
  }

  findOne(id: number) {
    const coffee = this.coffeeRepository.findOne({ where: { id } });
    if (!coffee) {
      throw new NotFoundException(`Coffee #${id} not found`);
    }

    return coffee;
  }

  async create(createCoffeeInput: CreateCoffeeInput) {
    const flavors = await Promise.all(
      createCoffeeInput.flavors.map((name) => this.preloadFlavorByName(name)),
    );

    const coffee = this.coffeeRepository.create({
      ...createCoffeeInput,
      flavors,
    });
    const newCoffee = this.coffeeRepository.save(coffee);
    this.pubsub.publish('coffeeAdded', { coffeeAdded: newCoffee });
    return newCoffee;
  }

  async update(id: number, updateCoffeeInput: UpdateCoffeeInput) {
    let flavors = [];

    if (updateCoffeeInput.flavors) {
      flavors = await Promise.all(
        updateCoffeeInput.flavors.map((name) => this.preloadFlavorByName(name)),
      );
    }

    const coffee = await this.findOne(id);
    if (!coffee) {
      throw new NotFoundException(`Coffee #${id} not found`);
    }

    this.coffeeRepository.merge(coffee, { ...updateCoffeeInput, flavors });
    return this.coffeeRepository.save(coffee);
  }

  async delete(id: number) {
    const coffee = await this.findOne(id);
    if (!coffee) {
      throw new NotFoundException(`Coffee #${id} not found`);
    }
    return this.coffeeRepository.remove(coffee);
  }

  private async preloadFlavorByName(name: string): Promise<Flavor> {
    const flavor = await this.flavorRepository.findOne({ where: { name } });
    if (flavor) {
      return flavor;
    }

    return this.flavorRepository.create({ name });
  }
}
