import express from 'express';
import { expressInit, Logger } from './loaders';

const app = express();
expressInit({ expressApp: app });

app
  .listen(process.env.PORT, () => {
    Logger.info(`
      ################################################
        Server listening on port: ${process.env.PORT}
      ################################################
    `);
  })
  .on('error', (err: any) => {
    Logger.error(err);
    process.exit(1);
  });

export = app;
