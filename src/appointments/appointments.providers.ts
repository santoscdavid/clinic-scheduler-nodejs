import { DataSource } from 'typeorm';
import { Appointment } from './entities/appointment.entity';

export const appointmentProviders = [
  {
    provide: 'APPOINTMENT_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Appointment),
    inject: ['DATA_SOURCE'],
  },
];
