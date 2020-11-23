import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import ISubscription from '../../Common/Interfaces/subscription.interface';
import SubscriptionDTO from '../../Common/DTO/subscriptions.dto';

@Injectable()
export class SubscriptionsService {
  @InjectModel('SUBSCRIPTIONS_MODEL')
  private subscriptionRepository: Model<ISubscription>;

  /**
   * Create Subscriptions
   * @param subscription
   */
  async createSubscriptions(
    subscription: SubscriptionDTO,
  ): Promise<string | HttpException> {
    try {
      await (await this.subscriptionRepository.create(subscription)).save();
      return 'Subcription created';
    } catch (e) {
      return new HttpException(e, HttpStatus.FORBIDDEN);
    }
  }

  /**
   * View all subcriptions
   */
  async viewAllSubscriptions(): Promise<
    Array<SubscriptionDTO> | string | HttpException
  > {
    try {
      const subscriptions = await this.subscriptionRepository.find({});
      return subscriptions.length !== 0
        ? subscriptions
        : 'No subscriptions found';
    } catch (e) {
      return new HttpException(e, HttpStatus.FORBIDDEN);
    }
  }
}
