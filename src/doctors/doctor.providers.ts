import { DataSource } from 'typeorm';
import { Doctor } from './entities/doctor.entity';
import { Specialty } from './entities/specialty.entity';

export const doctorProviders = [
  {
    provide: 'DOCTOR_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Doctor),
    inject: ['DATA_SOURCE'],
  },
  {
    provide: 'SPECIALTY_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Specialty),
    inject: ['DATA_SOURCE'],
  },
];
