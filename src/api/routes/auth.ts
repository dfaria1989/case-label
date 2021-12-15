import { Router } from 'express';
import middlewares from '../middlewares';
import { Auth } from '../controllers';

export default (app: Router): void => {
  app.post('/auth/login', middlewares.isAuth, Auth.login);
};
