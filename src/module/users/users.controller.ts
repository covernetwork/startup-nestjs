import { Controller, Get, NotFoundException, Post, Put } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {

  constructor(private usersService: UsersService) { }

  @Get()
  async getUser() {
    return await this.usersService.get()
  }

  @Post()
  async addUser() {
    await this.usersService.add()
  }

  @Put()
  putUser() {
    throw new NotFoundException('testing error');
  }
}
