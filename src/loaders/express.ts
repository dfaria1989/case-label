import bodyParser from 'body-parser';
import cors from 'cors';
import config from '../config';
import routes from '../api';

export default ({ app }: { app: any }): void => {
  app.enable('trust proxy');
  app.use(cors());
  app.use(bodyParser.json());
  app.use(config.api.prefix, routes());

  /// catch 404 and forward to error handler
  app.use((req: any, res: any, next: any) => {
    const err: any = new Error('Not Found');
    err.status = 404;
    next(err);
  });

  /// error handlers
  app.use((err: any, req: any, res: any, next: any) => {
    /**
     * Handle 401 thrown by express-jwt library
     */
    if (err.name === 'UnauthorizedError') {
      return res.status(err.status).send({ message: err.message }).end();
    }
    return next(err);
  });

  app.use((err: any, req: any, res: any) => {
    res.status(err.status || 500);
    res.json({
      errors: {
        message: err.message
      }
    });
  });
};
