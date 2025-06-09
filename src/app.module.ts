import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AuthModule } from './auth/auth.module';
import { DatabaseModule } from './database/database.module';
import { DoctorsModule } from './doctors/doctor.module';
import { UsersModule } from './users/users.module';
import { AppointmentsModule } from './appointments/appointments.module';

@Module({
  imports: [
    DatabaseModule,
    UsersModule,
    DoctorsModule,
    AuthModule,
    AppointmentsModule,
  ],
  controllers: [AppController],
})
export class AppModule {}
