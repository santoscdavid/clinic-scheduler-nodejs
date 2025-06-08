import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Specialty } from './specialty.entity';

@Entity()
export class Doctor {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @ManyToOne(() => Specialty, { eager: true })
  @JoinColumn({ name: 'specialtyId' })
  specialty: Specialty;
}
