import { faker } from '@faker-js/faker/locale/en';
import { User } from '../property/entities/user.entity/user.entity';
import { setSeederFactory } from 'typeorm-extension';

export const UserFactory = setSeederFactory(User, () => {
  const user = new User();
  user.first_name = faker.person.firstName();
  user.last_name = faker.person.lastName();
  user.avatar_url = faker.image.avatar();
  return user;
});
