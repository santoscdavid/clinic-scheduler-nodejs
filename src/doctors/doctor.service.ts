import { Inject, Injectable } from '@nestjs/common';
import { Doctor } from './entities/doctor.entity';
import { Specialty } from './entities/specialty.entity';
import { Repository } from 'typeorm';

@Injectable()
export class DoctorsService {
  constructor(
    @Inject('DOCTOR_REPOSITORY')
    private doctorRepository: Repository<Doctor>,
    @Inject('SPECIALTY_REPOSITORY')
    private specialtyRepository: Repository<Specialty>,
  ) {}

  async getAllDoctors(): Promise<Doctor[]> {
    return this.doctorRepository.find({ relations: ['specialty'] });
  }

  async getAllSpecialties(): Promise<Specialty[]> {
    return this.specialtyRepository.find();
  }

  async createDoctor(doctorData: Omit<Doctor, 'id'>): Promise<Doctor> {
    const doctor = this.doctorRepository.create(doctorData);
    return this.doctorRepository.save(doctor);
  }

  async createSpecialty(specialtyData: Omit<Specialty, 'id'>): Promise<Specialty> {
    const specialty = this.specialtyRepository.create(specialtyData);
    return this.specialtyRepository.save(specialty);
  }
}
