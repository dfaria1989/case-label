import { Response, Request } from 'express';
import AuthService from '../../services/auth';

export default class Auth {
  static async login(req: Request, res: Response): Promise<any> {
    const { password, username } = req.body;

    try {
      const response = await AuthService.auth(password, username);
      return res.status(200).json(response);
    } catch (error: any) {
      console.log(error);
      return res.status(500).json(error.message);
    }
  }
}
