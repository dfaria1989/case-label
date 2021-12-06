import { Router } from 'express';
import middlewares from '../middlewares';
import { Case } from '../controllers';

export default (app: Router): void => {
  app.post('/cases', middlewares.isValidToken, middlewares.isValidRequest, Case.create);
};
