import { Module } from '@nestjs/common';
import AuthService from './auth.service';
import { UserService } from '../User/user.service';
import { JwtModule } from '@nestjs/jwt';
import { UserSchema } from '../Database/Models/user.model';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthController } from './auth.controller';
import { ConfigModule } from '@nestjs/config';
import JwtStrategy from 'src/Common/Strategy/jwt.strategy';
import { EmailService } from '../Email/email.service';


@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forFeature([{ name: 'USER_MODEL', schema: UserSchema }]),
    JwtModule.register({
      secret: process.env.TOKEN_VALIDATE,
        signOptions: { expiresIn: '60d' },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, UserService, JwtStrategy, EmailService],
})
export class AuthModule {}
