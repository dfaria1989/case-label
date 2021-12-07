import { Response, Request } from 'express';
import ConditionService from '../../services/condition';

export default class Cases {
  static async findAll(req: Request, res: Response): Promise<any> {
    try {
      const response = await ConditionService.findAll();
      return res.status(200).json(response);
    } catch (error: any) {
      return res.status(500).json(error.message);
    }
  }
}
