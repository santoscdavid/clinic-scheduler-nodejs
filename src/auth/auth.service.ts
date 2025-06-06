import { User } from 'src/users/entities/user.entity';

const JWT_SECRET = process.env.JWT_SECRET || 'your_jwt_secret';

export class AuthService {
  private users: User[] = [
    {
      id: '1',
      email: 'admin',
      passwordHash: 'admin123',
    },
  ];

  async login(email: string, password: string): Promise<User | null> {
    const user = this.users.find((u) => u.email === email);
    if (user && password == user.passwordHash) {
      return user;
    }
    return null;
  }
}

export default new AuthService();
