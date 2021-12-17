import UserModel from '../models/user';
import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';
import config from '../config';
import { LoginResponse } from 'interfaces';

export default class AuthService extends UserModel {
  static async auth(password: string, username: string): Promise<any> {
    console.log('username', username);

    try {
      const user: any = await UserModel.findOne().where('username').equals(username).lean();
      console.log('user', user);

      if (!user) throw new Error('Invalid username or password!');

      if (await bcryptjs.compare(password, user?.password)) {
        const token = jwt.sign({ id: user._id, username: user.username }, config.jwt_secret as string, {
          expiresIn: '50m'
        });
        return { status: true, accessToken: token };
      }

      throw new Error('Invalid username or password!');
    } catch (error: any) {
      if (error?.code === 11000) {
        throw new Error('Username already in use');
      }
      throw new Error(error);
    }
  }
}
