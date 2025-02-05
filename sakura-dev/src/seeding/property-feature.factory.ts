import { faker } from '@faker-js/faker/locale/en';
import { PropertyFeature } from '../property/entities/property-feature.entity/property-feature.entity';
import { setSeederFactory } from 'typeorm-extension';

export const PropertyFeatureFactory = setSeederFactory(PropertyFeature, () => {
  const property = new PropertyFeature();
  property.badrooms = faker.number.int({ min: 1, max: 5 });
  property.bathrooms = faker.number.int({ min: 1, max: 5 });
  property.area = faker.number.int({ min: 1, max: 5 });
  property.hasBalcony = faker.datatype.boolean();
  property.hasPool = faker.datatype.boolean();
  property.hasYard = faker.datatype.boolean();
  return property;
});
