import { ObjectType } from '@nestjs/graphql';
import { Drink } from 'src/common/interfaces/drink.interface/drink.interface';

@ObjectType({ implements: Drink })
export class Tee implements Drink {
  name: string;
}
