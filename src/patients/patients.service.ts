import { Injectable } from '@nestjs/common';
import { Patient } from './entities/patient.entity';

@Injectable()
export class PatientsService {
  private readonly patients: Patient[] = [];

  getAll(): Patient[] {
    return this.patients;
  }
}
