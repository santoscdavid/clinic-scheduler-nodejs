import { Controller, Get } from '@nestjs/common';
import { DoctorsService } from './doctor.service';
import { Doctor } from './entities/doctor.entity';
import { Specialty } from './entities/specialty.entity';

@Controller('doctors')
export class DoctorsController {
  constructor(private doctorsService: DoctorsService) {}

  @Get()
  getAllDoctors(): Doctor[] {
    return this.doctorsService.getAllDoctors();
  }

  @Get('specialties')
  getAllSpecialties(): Specialty[] {
    return this.doctorsService.getAllSpecialties();
  }
}
