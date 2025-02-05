import { Field, ID, ObjectType } from '@nestjs/graphql';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Flavor } from '../flavor.entity/flavor.entity';
import { Drink } from 'src/common/interfaces/drink.interface/drink.interface';
import { CoffeeTypes } from 'src/common/enums/coffee-types.enum';
import { LoggerMiddleware } from 'src/common/middlewares/logger.middleware';

@Entity()
@ObjectType({ description: 'A coffee entity', implements: Drink })
export class Coffee implements Drink {
  @PrimaryGeneratedColumn()
  @Field(() => ID, { description: 'The id of the coffee' })
  id: number;

  @Field(() => String, { middleware: [LoggerMiddleware] })
  @Column()
  name: string;

  @Column()
  brand: string;

  @JoinTable()
  @ManyToMany(() => Flavor, (flavor) => flavor.coffees, { cascade: true })
  flavors?: Flavor[];

  @CreateDateColumn()
  createdAt?: Date;

  @Column({ nullable: true })
  type?: CoffeeTypes;
}
