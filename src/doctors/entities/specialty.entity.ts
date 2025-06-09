import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Specialty {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;
}
