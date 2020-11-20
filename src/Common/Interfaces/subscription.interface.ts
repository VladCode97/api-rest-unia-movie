import { Document } from 'mongoose';

export default interface ISubscription extends Document {
  createDateSubscriptions: Date;
  typePlaneSubscriptions: string;
  priceSubscriptions: number;
}
