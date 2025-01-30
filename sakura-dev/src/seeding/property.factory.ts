import { faker } from '@faker-js/faker/locale/en';
import { Property } from '../property/entities/property.entity';
import { setSeederFactory } from 'typeorm-extension';

export const PropertyFactory = setSeederFactory(Property, () => {
  const property = new Property();
  property.name = faker.commerce.productName();
  property.description = faker.commerce.productDescription();
  property.price = +faker.commerce.price({ min: 100, max: 1000, dec: 0 });
  return property;
});
