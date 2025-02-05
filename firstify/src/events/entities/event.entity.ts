import { Entity, PrimaryGeneratedColumn, Column, Index } from 'typeorm';

@Index(['name', 'type']) //Composite index
@Entity()
export class Event {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Index() // Index on type
  @Column()
  type: string;

  @Column('json')
  payload: Record<string, any>;
}
