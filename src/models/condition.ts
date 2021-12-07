import { Document, Schema } from 'mongoose';
import mongoose from 'mongoose';

/**
 * @export
 * @interface IConditionModel
 * @extends {Document}
 */
export interface IConditionModel extends Document {
  condition: string;
  code: string;
}

const conditionSchema: Schema = new Schema(
  {
    ICD_10: {
      type: String,
      required: true
    },
    ICD_10_Description: {
      type: String,
      trim: true,
      required: true
    }
  },
  {
    collection: 'condition'
  }
);

export default mongoose.model<IConditionModel>('Condition', conditionSchema);
