import { Injectable, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './users.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {

  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) { }

  async add(): Promise<User | void> {
    try {

      const userData: User = this.usersRepository.create()

      userData.email = "catur@gmail.com";
      userData.address = "solo";
      userData.salt = await bcrypt.genSalt(10);
      userData.password = await bcrypt.hash("testing", userData.salt);

      await userData.save();

    } catch (error) {
      throw new BadRequestException('halah');
    }
  }

  async get(): Promise<User | void> {
    try {
      const data: User = await this.usersRepository.findOne({
        where: { email: "catur@gmail.com" }
      })
      return data;
    } catch (error) {
      throw new BadRequestException('halah');
    }
  }

}
