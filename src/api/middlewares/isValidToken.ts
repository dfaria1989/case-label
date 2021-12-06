import jwt from 'jsonwebtoken';
import config from '../../config';

const isValidToken = (req: any, res: any, next: any) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) return res.status(401);

  try {
    const user = jwt.verify(token, config.jwt_secret as string);
    if (!user) return res.status(403);
    req.user = user;
    console.log('user', user);
    next();
  } catch (error) {
    return res.status(403).json(error);
  }
};

export default isValidToken;
