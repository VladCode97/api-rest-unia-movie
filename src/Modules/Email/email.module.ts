import { Module } from '@nestjs/common';
import { EmailService } from './email.service';
import { ConfigModule } from '@nestjs/config';
import { MailerModule } from '@nestjs-modules/mailer';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MailerModule.forRoot({
      transport: {
        service: process.env.EMAIL_SERVICE,
        auth: {
          user: process.env.USER_EMAIL,
          pass: process.env.PASSWORD_EMAIL,
        }
      },
    }),
  ],
  providers: [EmailService],
})
export class EmailModule {}
