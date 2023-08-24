import { Controller, Get, Post, UseGuards, Request } from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './jwt-auth.guard';

@Controller('auth')
export class AuthController {

  constructor(private authService: AuthService) { }

  @Post()
  login() {
    return this.authService.login();
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  hallo(@Request() req) {
    console.log(req);
    return "Hallo";
  }

}
