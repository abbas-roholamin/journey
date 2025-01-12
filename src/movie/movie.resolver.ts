import { ParseIntPipe, UseGuards } from '@nestjs/common';
import { Args, ID, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Movie } from './entities/movie.entity/movie.entity';
import { MovieService } from './movie.service';
import { CreateMovieInput } from './dto/create-movie.input/create-movie.input';
import { UpdateMovieInput } from './dto/update-movie.input/update-movie.input';
import { JwtGuard } from 'src/auth/guard/jwt.guard';

@UseGuards(JwtGuard)
@Resolver()
export class MovieResolver {
  constructor(private readonly movieService: MovieService) {}

  @Query(() => [Movie], { name: 'getMovies' })
  async getMovies(
    @Args('search', { nullable: true }) search?: string,
    @Args('page', { nullable: true }) page?: number,
  ): Promise<Movie[]> {
    return this.movieService.find({ search, page });
  }

  @Query(() => Movie, { name: 'getMovie' })
  async getMovie(
    @Args('id', { type: () => ID }, ParseIntPipe) id: number,
  ): Promise<Movie> {
    return this.movieService.findOne({ where: { id } });
  }

  @Mutation(() => Movie, { name: 'createMovie' })
  async create(@Args('createMovieInput') createMovieInput: CreateMovieInput) {
    return this.movieService.create(createMovieInput);
  }

  @Mutation(() => Movie, { name: 'updateMovie' })
  async update(
    @Args('id', { type: () => ID }, ParseIntPipe) id: number,
    @Args('updateMovieInput') updateMovieInput: UpdateMovieInput,
  ) {
    return this.movieService.update(id, updateMovieInput);
  }

  @Mutation(() => Movie, { name: 'deleteMovie' })
  async delete(@Args('id', { type: () => ID }, ParseIntPipe) id: number) {
    return this.movieService.delete(id);
  }
}
