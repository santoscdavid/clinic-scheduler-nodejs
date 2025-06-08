import { DataSource } from 'typeorm';
import { Patient } from './entities/patient.entity';

export const photoProviders = [
  {
    provide: 'PATIENT_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Patient),
    inject: ['DATA_SOURCE'],
  },
];