import { Injectable } from '@nestjs/common';
import { Coffee } from './entities/coffee.entity';

@Injectable()
export class CoffeeService {
  private coffees: Coffee[] = [
    {
      id: 1,
      name: 'Coffee 1',
      brand: 'Brand 1',
      flavors: ['Flavor 1', 'Flavor 2'],
    },
    {
      id: 2,
      name: 'Coffee 2',
      brand: 'Brand 2',
      flavors: ['Flavor 1', 'Flavor 3'],
    },
  ];

  findAll() {
    return this.coffees;
  }

  findOne(id: string) {
    return this.coffees.find((item) => item.id === +id);
  }

  create(createCoffeeDto: any) {
    this.coffees.push(createCoffeeDto);
  }

  update(id: string, updateCoffeeDto: any) {
    const existingCoffee = this.findOne(id);
    if (existingCoffee) {
      //
    }
  }

  delete(id: string) {
    this.coffees = this.coffees.filter((item) => item.id !== +id);
    return true;
  }
}
