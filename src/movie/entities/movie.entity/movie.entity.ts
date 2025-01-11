import { Field, ID, ObjectType } from '@nestjs/graphql';
import { MovieGenre } from 'src/movie/enum/movie-genre.enum';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity()
export class Movie {
  @Field(() => ID, { description: 'The id of the coffee' })
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  title: string;

  @Column({ type: 'longtext' })
  description: string;

  @Column({ type: 'double' })
  imdb_score: number;

  @Column({ nullable: true })
  genre: MovieGenre;

  @Column()
  released_year: number;

  @Column()
  featured_image: string;

  @Column()
  video_url: string;
}
