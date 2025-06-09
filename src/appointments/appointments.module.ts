import { Module } from '@nestjs/common';
import { AppointmentsController } from './appointments.controller';
import { AppointmentsService } from './appointments.service';
import { appointmentProviders } from './appointments.providers';
import { DatabaseModule } from '../database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [AppointmentsController],
  providers: [AppointmentsService, ...appointmentProviders],
  exports: [AppointmentsService, ...appointmentProviders],
})
export class AppointmentsModule {}
