import { Module } from '@nestjs/common';
import { DoctorsController } from './doctor.controller';
import { DoctorsService } from './doctor.service';
import { doctorProviders } from './doctor.providers';
import { DatabaseModule } from '../database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [DoctorsController],
  providers: [DoctorsService, ...doctorProviders],
  exports: [DoctorsService, ...doctorProviders],
})
export class DoctorsModule {}
