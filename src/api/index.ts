import { Router } from 'express';
import auth from './routes/auth';
import user from './routes/user';
import doctorCase from './routes/case';

export default (): Router => {
  const app = Router();
  auth(app);
  user(app);
  doctorCase(app);
  return app;
};
