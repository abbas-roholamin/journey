import { registerEnumType } from '@nestjs/graphql';

export enum MovieGenre {
  ACTION = 'ACTION',
  ANIMATION = 'ANIMATION',
  DRAMA = 'DRAMA',
}

registerEnumType(MovieGenre, { name: 'MovieGenre' });
