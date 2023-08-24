import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { config } from './typeorm.config';
import { UsersModule } from './module/users/users.module';
import { AuthModule } from './module/auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(config),
    UsersModule,
    AuthModule,
  ],
})
export class AppModule { }
