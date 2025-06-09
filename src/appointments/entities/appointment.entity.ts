import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Appointment {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: true })
  patientId: string;

  @Column()
  doctorId: string;

  @Column()
  date: Date;

  @Column({ default: false })
  booked: boolean;
}
