import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCoffeeInput } from './dto/coffee.input/create-coffee.input';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Coffee } from './entities/coffee.entity/coffee.entity';
import { UpdateCoffeeInput } from './dto/update-coffee.input/update-coffee.input';

@Injectable()
export class CoffeeService {
  constructor(
    @InjectRepository(Coffee)
    private readonly coffeeRepository: Repository<Coffee>,
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

  create(createCoffeeInput: CreateCoffeeInput) {
    const coffeee = this.coffeeRepository.create(createCoffeeInput);
    return this.coffeeRepository.save(coffeee);
  }

  async update(id: number, updateCoffeeInput: UpdateCoffeeInput) {
    const coffee = await this.coffeeRepository.preload({
      id,
      ...updateCoffeeInput,
    });
    if (!coffee) {
      throw new NotFoundException(`Coffee #${id} not found`);
    }
    return this.coffeeRepository.save(coffee);
  }

  async delete(id: number) {
    const coffee = await this.findOne(id);
    if (!coffee) {
      throw new NotFoundException(`Coffee #${id} not found`);
    }
    return this.coffeeRepository.remove(coffee);
  }
}
