import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { User } from 'src/users/entities/user.entity';

const JWT_SECRET = process.env.JWT_SECRET || 'your_jwt_secret';

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService) {}

  async login(email: string, password: string): Promise<User | null> {
    const user = await this.usersService.findByEmail(email);
    if (user && password === user.passwordHash) {
      return user;
    }
    return null;
  }
}
