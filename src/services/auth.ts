import UserModel from '../models/user';
import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';
import config from '../config';
import { LoginResponse } from 'interfaces';

export default class AuthService extends UserModel {
  static async auth(password: string, username: string): Promise<LoginResponse> {
    try {
      const user: any = await UserModel.findOne({
        username: username
      }).lean();

      if (!user) return { status: false, message: 'Invalid username or password!' };

      if (await bcryptjs.compare(password, user?.password)) {
        const token = jwt.sign({ id: user._id, username: user.username }, config.jwt_secret as string, {
          expiresIn: '50m'
        });
        return { status: true, message: token };
      }

      return { status: false, message: 'Invalid username or password!' };
    } catch (error: any) {
      if (error?.code === 11000) {
        return { status: false, message: 'Username already in use' };
      }
      throw new Error(error);
    }
  }
}
