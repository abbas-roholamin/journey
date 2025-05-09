import { Injectable, NotFoundException } from '@nestjs/common';
import { Movie } from './entities/movie.entity/movie.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateMovieInput } from './dto/create-movie.input/create-movie.input';
import { UpdateMovieInput } from './dto/update-movie.input/update-movie.input';

@Injectable()
export class MovieService {
  constructor(
    @InjectRepository(Movie)
    private readonly movieRepository: Repository<Movie>,
  ) {}

  async find({
    search,
    page = 1,
  }: {
    search?: string;
    page?: number;
  }): Promise<Movie[]> {
    const query = this.movieRepository.createQueryBuilder('movie');

    if (search) {
      query.where('movie.title ILIKE :search', {
        search: `%${search}%`,
      });
    }

    return await query
      .skip((page - 1) * 4)
      .take(4)
      .getMany();
  }

  async findOne(where: { where: { [key: string]: any } }): Promise<Movie> {
    const movie = await this.movieRepository.findOne(where);
    if (!movie) {
      throw new NotFoundException(`Movie not found`);
    }

    return movie;
  }

  async create(createMovieInput: CreateMovieInput): Promise<Movie> {
    return await this.movieRepository.save(createMovieInput);
  }

  async update(id: number, updateMovieInput: UpdateMovieInput): Promise<Movie> {
    await this.findOne({ where: { id } });

    await this.movieRepository.update(id, updateMovieInput);
    return await this.movieRepository.findOneBy({ id });
  }

  async delete(id: number): Promise<Movie> {
    const movie = await this.findOne({ where: { id } });

    return await this.movieRepository.remove(movie);
  }
}
