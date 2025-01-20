import { InputType, PartialType } from '@nestjs/graphql';
import { CreateMovieInput } from '../create-movie.input/create-movie.input';

@InputType({ description: 'Update Movie input' })
export class UpdateMovieInput extends PartialType(CreateMovieInput) {}
