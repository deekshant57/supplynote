import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './local.strategy';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './jwt.strategy';

@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
    PassportModule,
    JwtStrategy,
    JwtModule.register({
      secret: 'My random secret key never let others',
      signOptions: {
        expiresIn: '1h',
      },
    }),
  ],
  providers: [UsersService, LocalStrategy],
  controllers: [UsersController],
})
export class UsersModule {}
