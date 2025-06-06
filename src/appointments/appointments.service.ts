import { Injectable } from '@nestjs/common';
import { Appointment } from './entities/appointment.entity';

@Injectable()
export class AppointmentsService {
  private readonly appointment: Appointment[] = [];

  getAll(): Appointment[] {
    return this.appointment;
  }

}
