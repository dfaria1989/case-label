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

  app.use((err: any, req: any, res: any, next: any) => {
    if (err.status === 404) {
      return res.status(err.status).send({ message: err.message, url: req.originalUrl }).end();
    }
    next(err);
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
