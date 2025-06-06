import { Controller, Post } from '@nestjs/common';
import { Request, Response } from 'express';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  async login(req: Request, res: Response) {
    try {
      const { email, password } = req.body;
      const token = await this.authService.login(email, password);
      res.json({ token });
    } catch (error) {
      res.status(401).json({ message: 'Invalid credentials' });
    }
  }

  // async register(req: Request, res: Response) {
  //     try {
  //         const { email, password } = req.body;
  //         const user = await authService.register(email, password);
  //         res.status(201).json(user);
  //     } catch (error) {
  //         res.status(400).json({ message: 'Registration failed' });
  //     }
  // }
}
