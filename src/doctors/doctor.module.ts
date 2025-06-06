import { Module } from '@nestjs/common';
import { DoctorsController } from './doctor.controller';
import { DoctorsService } from './doctor.service';

@Module({
  controllers: [DoctorsController],
  providers: [DoctorsService],
})
export class DoctorsModule {}
