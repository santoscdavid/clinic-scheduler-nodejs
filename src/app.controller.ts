import { Controller, Get } from '@nestjs/common';
import { UsersService } from './users/users.service';
import { DoctorsService } from './doctors/doctor.service';
import { AppointmentsService } from './appointments/appointments.service';

@Controller()
export class AppController {
  constructor(
    private readonly usersService: UsersService,
    private readonly doctorsService: DoctorsService,
    private readonly appointmentsService: AppointmentsService,
  ) {}

  @Get('services/users')
  async getUsers() {
    return this.usersService.findAll();
  }

  @Get('services/doctors')
  async getDoctors() {
    return this.doctorsService.getAllDoctors();
  }

  @Get('services/appointments')
  async getAppointments() {
    return this.appointmentsService.getAll();
  }
}
