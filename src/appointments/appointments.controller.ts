import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { AppointmentsService } from './appointments.service';
import { Appointment } from './entities/appointment.entity';

@Controller('appointments')
export class AppointmentsController {
  constructor(private appointmentsService: AppointmentsService) {}

  @Get()
  async getAll(): Promise<Appointment[]> {
    return this.appointmentsService.getAll();
  }

  @Post('available')
  async createAvailableSlot(
    @Body() body: { date: string; doctorId: string },
  ): Promise<Appointment> {
    return this.appointmentsService.createAvailableSlot(new Date(body.date), body.doctorId);
  }

  @Post('book/:id')
  async bookAppointment(
    @Param('id') id: string,
    @Body() body: { patientId: string },
  ): Promise<Appointment | { error: string }> {
    const result = await this.appointmentsService.bookAppointment(id, body.patientId);
    if (!result) return { error: 'Slot unavailable or already booked' };
    return result;
  }
}
