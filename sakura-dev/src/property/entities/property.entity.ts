import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { PropertyFeature } from './property-feature.entity.ts/property-feature.entity';

@Entity()
export class Property {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ type: 'text' })
  description: string;

  @Column({ default: 0 })
  price: number;

  @OneToOne(() => PropertyFeature, (feature) => feature.property, {
    cascade: true,
  })
  features: PropertyFeature;
}
