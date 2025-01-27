import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Property } from '../property.entity';

@Entity()
export class PropertyFeature {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  badrooms: number;

  @Column()
  bathrooms: number;

  @Column()
  area: number;

  @Column()
  hasBalcony: boolean;

  @Column()
  hasPool: boolean;

  @Column()
  hasYard: boolean;

  @OneToOne(() => Property, (property) => property.features)
  @JoinColumn()
  property: Property;
}
