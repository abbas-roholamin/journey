import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Movie } from './entities/movie.entity/movie.entity';
import { MovieService } from './movie.service';
import { MovieResolver } from './movie.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([Movie])],
  providers: [MovieService, MovieResolver],
})
export class MovieModule {}
