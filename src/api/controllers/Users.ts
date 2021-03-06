import { Response, Request } from 'express';
import UserService from '../../services/user';

export default class Users {
  static async create(req: Request, res: Response): Promise<any> {
    const { password, username } = req.body;
    console.log('password', password);
    try {
      const response = await UserService.create(password, username);
      console.log(response);
      return res.status(200).json(response);
    } catch (error: any) {
      console.log(error);
      return res.status(500).json(error.message);
    }
  }
}
