import { Response, Request } from 'express';
import AuthService from '../../services/auth';
import { LoginResponse } from 'interfaces';

export default class Auth {
  static async login(req: Request, res: Response): Promise<Response> {
    const { password, username } = req.body;
    console.log(password, username);
    try {
      const response: LoginResponse = await AuthService.auth(password, username);
      return res.status(200).json(response);
    } catch (error: any) {
      console.log(error);
      return res.status(500).json(error.message);
    }
  }
}
