import ConditionModel from '../models/condition';

export default class Condition {
  static async findAll() {
    try {
      const responseData = await ConditionModel.find();
      return { status: true, message: responseData };
    } catch (error: any) {
      throw new Error(error);
    }
  }
}
