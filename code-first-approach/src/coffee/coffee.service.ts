import { Injectable } from '@nestjs/common';
import { CreateCoffeeInput } from './dto/coffee.input/create-coffee.input';

@Injectable()
export class CoffeeService {
  findAll() {
    return [];
  }

  findOne(id: number) {
    return null;
  }

  create(createCoffeeInput: CreateCoffeeInput) {
    return null;
  }
}
