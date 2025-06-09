import { Inject, Injectable } from '@nestjs/common';
import { Appointment } from './entities/appointment.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AppointmentsService {
  constructor(
    @Inject('APPOINTMENT_REPOSITORY')
    private appointmentRepository: Repository<Appointment>,
  ) {}

  async getAll(): Promise<Appointment[]> {
    return this.appointmentRepository.find();
  }

  async createAvailableSlot(
    date: Date,
    doctorId: string,
  ): Promise<Appointment> {
    const appointment = this.appointmentRepository.create({
      date,
      doctorId,
      booked: false,
    });
    return this.appointmentRepository.save(appointment);
  }

  async bookAppointment(
    id: string,
    patientId: string,
  ): Promise<Appointment | null> {
    const appointment = await this.appointmentRepository.findOneBy({ id });
    if (!appointment || appointment.booked) return null;
    appointment.patientId = patientId;
    appointment.booked = true;
    return this.appointmentRepository.save(appointment);
  }
}
