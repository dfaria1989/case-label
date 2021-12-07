import { Document, Schema } from 'mongoose';
import mongoose from 'mongoose';

/**
 * @export
 * @interface ICaseModel
 * @extends {Document}
 */
export interface ICaseModel extends Document {
  case: string;
  viewed: boolean;
}

const caseSchema: Schema = new Schema({
  case: {
    type: String,
    required: true
  },
  viewed: {
    type: Boolean,
    default: false
  },
  doctor: {
    type: Schema.Types.ObjectId,
    ref: 'user'
  },
  condition: {
    type: Schema.Types.ObjectId,
    ref: 'condition'
  }
});

export default mongoose.model<ICaseModel>('case', caseSchema);
