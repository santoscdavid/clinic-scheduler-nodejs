import { Controller, Get } from '@nestjs/common';
import { PatientsService } from './patients.service';
import { Patient } from './entities/patient.entity';

@Controller('patients')
export class PatientsController {
  constructor(private patientsService: PatientsService) {}

  @Get()
  async getAll(): Promise<Patient[]> {
    return await this.patientsService.getAll();
  }
}
