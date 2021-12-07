import { Response, Request } from 'express';
import CaseService from '../../services/case';

export default class Cases {
  static async findAll(req: Request, res: Response): Promise<any> {
    try {
      const { viewed }: { viewed?: boolean } = req.query;
      const response = await CaseService.findAll(viewed);
      return res.status(200).json(response);
    } catch (error: any) {
      return res.status(500).json(error.message);
    }
  }

  static async create(req: Request, res: Response): Promise<any> {
    const cases = req.body;

    try {
      const response = await CaseService.create(cases);
      return res.status(200).json(response);
    } catch (error: any) {
      return res.status(500).json(error.message);
    }
  }

  static async update(req: Request, res: Response): Promise<any> {
    const { conditionid: conditionId, caseid: caseId } = req.params;
    const {
      user: { id }
    }: any = req;

    try {
      const response = await CaseService.update(id, conditionId, caseId);
      return res.status(200).json(response);
    } catch (error: any) {
      return res.status(500).json(error.message);
    }
  }
}
