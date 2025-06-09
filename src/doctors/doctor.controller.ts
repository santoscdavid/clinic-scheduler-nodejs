import { Controller, Get, Post, Body } from '@nestjs/common';
import { DoctorsService } from './doctor.service';
import { Doctor } from './entities/doctor.entity';
import { Specialty } from './entities/specialty.entity';

@Controller('doctors')
export class DoctorsController {
  constructor(private doctorsService: DoctorsService) {}

  @Get()
  async getAllDoctors(): Promise<Doctor[]> {
    return await this.doctorsService.getAllDoctors();
  }

  @Get('specialties')
  async getAllSpecialties(): Promise<Specialty[]> {
    return await this.doctorsService.getAllSpecialties();
  }

  @Post()
  async createDoctor(@Body() doctorData: Omit<Doctor, 'id'>): Promise<Doctor> {
    return this.doctorsService.createDoctor(doctorData);
  }

  @Post('specialties')
  async createSpecialty(
    @Body() specialtyData: Omit<Specialty, 'id'>,
  ): Promise<Specialty> {
    return this.doctorsService.createSpecialty(specialtyData);
  }
}
