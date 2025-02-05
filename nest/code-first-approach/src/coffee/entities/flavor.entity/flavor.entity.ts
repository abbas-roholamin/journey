import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Coffee } from '../coffee.entity/coffee.entity';

@Entity()
@ObjectType()
export class Flavor {
  @PrimaryGeneratedColumn()
  @Field(() => ID, { description: 'The id of the flavor' })
  id: number;

  @Column({ unique: true })
  name: string;

  @ManyToMany(() => Coffee, (coffee) => coffee.flavors)
  coffees: Coffee[];
}
