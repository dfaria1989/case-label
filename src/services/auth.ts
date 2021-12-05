import UserModel from '../models/user';
import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';

export default class AuthService extends UserModel {
  static async auth(password: string, username: string) {
    const JWT_SECRET = 'eswdsdsdsae3e3_232323edsdss';

    try {
      const user: any = await UserModel.findOne({
        username: username
      }).lean();

      if (!user) return { status: false, message: 'Invalid username or password!' };

      if (await bcryptjs.compare(password, user?.password)) {
        const token = jwt.sign({ id: user.id, username: user.username }, JWT_SECRET);
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
