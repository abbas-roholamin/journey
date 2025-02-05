import { registerEnumType } from '@nestjs/graphql';

export enum CoffeeTypes {
  ESPRESSO = 'ESPRESSO',
  LATTE = 'LATTE',
  CAPPUCCINO = 'CAPPUCCINO',
}

registerEnumType(CoffeeTypes, { name: 'CoffeeTypes' });
