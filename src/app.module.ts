import { AuthModule } from './Modules/Auth/auth.module';
import { UserModule } from './Modules/User/user.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './Modules/Database/database.module';
import { SubscriptionsModule } from './Modules/Subscriptions/subscriptions.module';
import { EmailModule } from './Modules/Email/email.module';
import { MoviesModule } from './Modules/Movies/movies.module';

@Module({
  imports: [AuthModule, UserModule, DatabaseModule, SubscriptionsModule, EmailModule, MoviesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
