import CaseModel from '../models/case';

export default class Case {
  static async create(cases: string) {
    try {
      const responseData = await CaseModel.create(cases);
      return { status: true, message: responseData };
    } catch (error: any) {
      throw new Error(error);
    }
  }
}
