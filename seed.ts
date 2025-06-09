import { Appointment } from './src/appointments/entities/appointment.entity';
import { Doctor } from './src/doctors/entities/doctor.entity';
import { Specialty } from './src/doctors/entities/specialty.entity';
import { User } from './src/users/entities/user.entity';
import { DataSource } from 'typeorm';

async function seed() {
  const dataSource = new DataSource({
    type: 'sqlite',
    database: 'database.sqlite',
    entities: [User, Specialty, Doctor, Appointment],
    synchronize: true,
  });
  await dataSource.initialize();

  // Usuários
  const userRepo = dataSource.getRepository(User);
  await userRepo.clear();
  await userRepo.save([
    { email: 'admin@clinic.com', passwordHash: 'admin123' },
    { email: 'paciente@clinic.com', passwordHash: 'paciente123' },
  ]);

  // Especialidades
  const specialtyRepo = dataSource.getRepository(Specialty);
  // Remove todos os médicos antes de remover especialidades para evitar erro de FK
  const doctorRepo = dataSource.getRepository(Doctor);
  await doctorRepo.clear();
  await specialtyRepo.clear();
  const specialties = await specialtyRepo.save([
    { name: 'Clínico Geral' },
    { name: 'Pediatria' },
    { name: 'Cardiologia' },
  ]);

  // Médicos
  const doctors = await doctorRepo.save([
    { name: 'Dr. João Silva', specialty: specialties[0] },
    { name: 'Dra. Maria Souza', specialty: specialties[1] },
    { name: 'Dr. Carlos Lima', specialty: specialties[2] },
  ]);

  // Agendamentos
  const appointmentRepo = dataSource.getRepository(Appointment);
  await appointmentRepo.clear();
  await appointmentRepo.save([
    { doctorId: doctors[0].id, date: new Date('2025-06-10T09:00:00'), booked: false },
    { doctorId: doctors[1].id, date: new Date('2025-06-10T10:00:00'), booked: false },
    { doctorId: doctors[2].id, date: new Date('2025-06-10T11:00:00'), booked: false },
  ]);

  console.log('Seed concluído!');
  await dataSource.destroy();
}

seed().catch((e) => {
  console.error(e);
  process.exit(1);
});
