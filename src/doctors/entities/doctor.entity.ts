import { Specialty } from './specialty.entity';

export interface Doctor {
  id: string;
  name: string;
  specialty: Specialty;
}
