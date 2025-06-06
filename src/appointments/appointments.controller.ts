import { Controller, Get } from '@nestjs/common';
import { AppointmentsService } from './appointments.service';
import { Appointment } from './entities/appointment.entity';

@Controller('doctors')
export class AppointmentsController {
  constructor(private appointmentsService: AppointmentsService) {}

  @Get()
  getAll(): Appointment[] {
    return this.appointmentsService.getAll();
  }

}
