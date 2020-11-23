import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';
import AuthDTO from 'src/Common/DTO/auth.dto';

@Injectable()
export class EmailService {
  constructor(private mailService: MailerService) {}

  /**
   * @method Send Email
   */
  async sendMail(
    to: AuthDTO,
    subject: string,
    text: string,
    attachments?: any,
  ): Promise<string> {
    try {
      await this.mailService.sendMail({
        to: to.email,
        from: process.env.USERNAME_MAIL,
        subject,
        text,
        attachments,
      });
      return Promise.resolve('Send Email correct');
    } catch (error) {
      return Promise.reject('Error send email');
    }
  }
}
