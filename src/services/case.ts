import CaseModel from '../models/case';

export default class Case {
  static async findAll(viewed: boolean | undefined) {
    const filter = (viewed && { viewed: viewed }) || {};
    try {
      const responseData = await CaseModel.find(filter);
      return { status: true, message: responseData };
    } catch (error: any) {
      throw new Error(error);
    }
  }

  static async create(cases: string) {
    try {
      const responseData = await CaseModel.create(cases);
      return { status: true, message: responseData };
    } catch (error: any) {
      throw new Error(error);
    }
  }

  static async update(id: string, conditionId: string, caseId: string) {
    try {
      await CaseModel.findByIdAndUpdate(
        caseId,
        {
          condition: conditionId,
          viewed: true,
          doctor: id
        },
        {
          returnNewDocument: true
        }
      );
      return { status: true, message: true };
    } catch (error: any) {
      throw new Error(error);
    }
  }
}
