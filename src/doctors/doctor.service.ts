import { Injectable } from '@nestjs/common';
import { Doctor } from './entities/doctor.entity';
import { Specialty } from './entities/specialty.entity';

@Injectable()
export class DoctorsService {
  private readonly patients: Doctor[] = [];
  private readonly specialties: Specialty[] = [];

  getAllDoctors(): Doctor[] {
    return this.patients;
  }

  getAllSpecialties(): Specialty[] {
    return this.specialties;
  }
}
