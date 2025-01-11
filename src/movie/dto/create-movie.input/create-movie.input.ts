import { InputType } from '@nestjs/graphql';
import { IsNumber, IsString, MinLength } from 'class-validator';
import { MovieGenre } from 'src/movie/enum/movie-genre.enum';

@InputType({ description: 'The movie input' })
export class CreateMovieInput {
  @MinLength(3)
  title: string;

  @MinLength(3)
  description: string;

  @IsNumber()
  imdb_score: number;

  @IsString()
  genre: MovieGenre;

  @IsNumber()
  released_year: number;

  @IsString()
  featured_image: string;

  @IsString()
  video_url: string;
}
