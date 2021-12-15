import jwt from 'jsonwebtoken';
import config from '../../config';

const isAuth = (req: any, res: any, next: any) => {
  const authHeader = req.headers['authorization'];

  try {
    if (!authHeader) throw new Error('not authenticated');

    const token = authHeader && authHeader.split(' ')[1];
    const payload = jwt.verify(token, config.jwt_secret as string);
    if (!payload) throw new Error('not authenticated');
    req.user = payload;
    console.log('user', payload);
    next();
  } catch (error: any) {
    return res.status(403).json(error.message);
  }
};

export default isAuth;
