import { Field, ID, ObjectType } from '@nestjs/graphql';
import { MovieGenre } from 'src/movie/enum/movie-genre.enum';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity()
export class Movie {
  @Field(() => ID, { description: 'The id of the coffee' })
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column({ unique: true })
  title: string;

  @Field()
  @Column({ type: 'longtext' })
  description: string;

  @Field()
  @Column({ type: 'double' })
  imdb_score: number;

  @Field()
  @Column({ nullable: true, type: 'enum', enum: MovieGenre })
  genre: MovieGenre;

  @Column()
  released_year: number;

  @Field()
  @Column()
  featured_image: string;

  @Field()
  @Column()
  video_url: string;
}
