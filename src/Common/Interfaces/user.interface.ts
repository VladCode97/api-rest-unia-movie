import { Document } from 'mongoose';

/**
 * @interface User
 */
export default interface IUser extends Document {
  readonly name: string;
  readonly email: string;
  readonly password: string;
  readonly status: boolean;
  readonly document: string;
  readonly age: number;
  readonly phone: string;
}
