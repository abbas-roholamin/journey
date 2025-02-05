import { createUnionType } from '@nestjs/graphql';
import { Coffee } from 'src/coffee/entities/coffee.entity/coffee.entity';
import { Tee } from 'src/tee/entities/tee.entity/tee.entity';

export const DrinkResultUnion = createUnionType({
  name: 'DrinkResult',
  types: () => [Coffee, Tee],
});
