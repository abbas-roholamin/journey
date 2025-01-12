import { Field, InputType } from '@nestjs/graphql';
import { IsNumber, IsString, MinLength } from 'class-validator';
import { MovieGenre } from '../../enum/movie-genre.enum';

@InputType({ description: 'The movie input' })
export class CreateMovieInput {
  @Field()
  @MinLength(3)
  title: string;

  @Field()
  @MinLength(3)
  description: string;

  @Field()
  @IsNumber()
  imdb_score: number;

  @Field()
  @IsString()
  genre: MovieGenre;

  @Field()
  @IsNumber()
  released_year: number;

  @Field()
  @IsString()
  featured_image: string;

  @Field()
  @IsString()
  video_url: string;
}
