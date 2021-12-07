import { Document, Schema } from 'mongoose';
import mongoose from 'mongoose';

/**
 * @export
 * @interface IUserModel
 * @extends {Document}
 */
export interface IUserModel extends Document {
  username: string;
  password: string;
}

const userSchema: Schema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      trim: true,
      required: true
    },
    password: {
      type: String,
      trim: true,
      required: true
    }
  },
  {
    timestamps: true,
    collection: 'users'
  }
);

export default mongoose.model<IUserModel>('user', userSchema);
