import express, { Express, Request, Response } from 'express';
import helmet from 'helmet';
import morganMiddleware from './utils/middleware/morgan';
import { devicesRouter } from './routes/devices';
import dotenv from 'dotenv';
dotenv.config();

export function configureServer():Express {
  const app: Express = express();

  //middleware
  app.use(express.json());
  app.use(helmet());
  if(process.env.NODE_ENV !== 'test') {
    app.use(morganMiddleware);
  };

  //routes
  app.use('/api/devices', devicesRouter);
  app.use('/api/forecast', devicesRouter);

  return app;
};