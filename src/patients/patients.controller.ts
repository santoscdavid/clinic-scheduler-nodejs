import { Controller, Get } from '@nestjs/common';
import { PatientsService } from './patients.service';
import { Patient } from './entities/patient.entity';

@Controller('patients')
export class PatientsController {
  constructor(private patientsService: PatientsService) {}

  @Get()
  getAll(): Patient[] {
    return this.patientsService.getAll();
  }
}
