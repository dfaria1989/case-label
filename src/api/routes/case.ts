import { Router } from 'express';
import middlewares from '../middlewares';
import { Case } from '../controllers';

export default (app: Router): void => {
  app.get('/cases', middlewares.isAuth, Case.findNext);
  app.post('/cases', middlewares.isAuth, middlewares.isValidRequest, Case.create);
  app.patch('/cases/:caseid/conditions/:conditionid', middlewares.isAuth, Case.update);
};
