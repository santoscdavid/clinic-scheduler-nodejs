import { Injectable } from '@nestjs/common';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  private users: User[] = [];
  private idCounter = 1;

  create(userData: Omit<User, 'id'>): User {
    const user: User = { id: (this.idCounter++).toString(), ...userData };
    this.users.push(user);
    return user;
  }

  findAll(): User[] {
    return this.users;
  }

  findOne(id: number): User | undefined {
    return this.users.find((user) => user.id === id.toString());
  }

  update(id: number, updateData: Partial<Omit<User, 'id'>>): User | undefined {
    const user = this.findOne(id);
    if (!user) return undefined;
    Object.assign(user, updateData);
    return user;
  }

  remove(id: number): boolean {
    const index = this.users.findIndex((user) => user.id === id.toString());
    if (index === -1) return false;
    this.users.splice(index, 1);
    return true;
  }
}
