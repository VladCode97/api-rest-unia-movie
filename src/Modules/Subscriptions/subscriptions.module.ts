import { Module } from '@nestjs/common';
import { SubscriptionsService } from './subscriptions.service';
import { SubscriptionsController } from './subscriptions.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { SubscriptionsSchema } from '../Database/Models/subscriptions.model';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'SUBSCRIPTIONS_MODEL', schema: SubscriptionsSchema }]),
  ],
  providers: [SubscriptionsService],
  controllers: [SubscriptionsController],
})
export class SubscriptionsModule {}
