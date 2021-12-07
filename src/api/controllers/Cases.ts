import { Response, Request } from 'express';
import CaseService from '../../services/case';

export default class Cases {
  static async create(req: Request, res: Response): Promise<any> {
    const cases = req.body;

    try {
      const response = await CaseService.create(cases);
      return res.status(200).json(response);
    } catch (error: any) {
      return res.status(500).json(error.message);
    }
  }
}
