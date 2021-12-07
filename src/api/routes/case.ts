import { Router } from 'express';
import middlewares from '../middlewares';
import { Case } from '../controllers';

export default (app: Router): void => {
  app.get('/cases', middlewares.isValidToken, Case.findAll);
  app.post('/cases', middlewares.isValidToken, middlewares.isValidRequest, Case.create);
  app.patch('/cases/:caseid/conditions/:conditionid', middlewares.isValidToken, Case.update);
};
