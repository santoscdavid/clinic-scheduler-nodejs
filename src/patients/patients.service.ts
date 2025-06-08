import { Inject, Injectable } from '@nestjs/common';
import { Patient } from './entities/patient.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PatientsService {
  constructor(
    @Inject('PATIENT_REPOSITORY')
    private patientsRepository: Repository<Patient>,
  ) {}

  async getAll(): Promise<Patient[]> {
    return await this.patientsRepository.find();
  }
}
