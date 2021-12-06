import UserModel from '../models/user';
import bcryptjs from 'bcryptjs';

export default class Case {
  static async create(password: string, username: string) {
    const passwordHashed = await bcryptjs.hash(password, 10);

    try {
      const responseData = await UserModel.create({
        username: username,
        password: passwordHashed
      });
      return { status: true, message: responseData };
    } catch (error: any) {
      if (error?.code === 11000) {
        return { status: false, message: 'Username already in use' };
      }
      throw new Error(error);
    }
  }
}
