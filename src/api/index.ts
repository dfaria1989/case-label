import { Router } from 'express';
import auth from './routes/auth';
import user from './routes/user';
import doctorCase from './routes/case';
import condition from './routes/condition';

export default (): Router => {
  const app = Router();
  auth(app);
  user(app);
  doctorCase(app);
  condition(app);
  return app;
};
