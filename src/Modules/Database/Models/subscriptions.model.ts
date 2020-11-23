import { Schema } from 'mongoose';

/**
 * Schema by Subscriptions
 */
export const SubscriptionsSchema = new Schema({
  createDateSubscriptions: {
    type: 'Date',
    required: true,
    default: new Date(),
  },
  typePlaneSubscriptions: {
    type: 'string',
    required: true,
  },
  priceSubscriptions: {
    type: 'string',
    required: true,
  }
});
