import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { User } from '../users/users.entity';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly userseService: UsersService,
    private readonly jwtService: JwtService
  ) { }

  async validateUser(): Promise<User> {
    const user: any = await this.userseService.get();
    return user;
  }

  async login() {
    const payload = { username: "catur", sub: "sub" };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
