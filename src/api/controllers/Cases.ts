import { Response, Request } from 'express';
import CaseService from '../../services/case';

export default class Cases {
  static async create(req: Request, res: Response): Promise<any> {
    const { password, username } = req.body;
    console.log('password', password);
    return res.status(200).json(password);

    try {
      const response = await CaseService.create(password, username);
      console.log(response);
      return res.status(200).json(response);
    } catch (error: any) {
      console.log(error);
      return res.status(500).json(error.message);
    }
  }
}
