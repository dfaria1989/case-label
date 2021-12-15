import { Router } from 'express';
import middlewares from '../middlewares';
import { Condition } from '../controllers';

export default (app: Router): void => {
  app.get('/conditions', middlewares.isAuth, Condition.findAll);
};
