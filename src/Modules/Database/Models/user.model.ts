import { Schema } from 'mongoose';

export const UserSchema = new Schema({
  name: {
    type: 'string',
    required: true,
  },
  email: {
    type: 'string',
    required: true,
    unique: true,
  },
  password: {
    type: 'string',
    required: true,
  },
  status: {
    type: 'boolean',
    required: true,
    default: true,
  },
  document: {
    type: 'string',
    required: true,
    unique: true,
  },
  age: {
    type: 'number',
    required: true,
  },
  phone: {
    type: 'string',
    required: true,
  },
  Subscriptions: {
    type: Schema.Types.ObjectId,
    ref: 'SUBSCRIPTIONS_MODEL',
  },
});
