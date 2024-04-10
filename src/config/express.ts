import express, {type Application} from 'express';
import cors from 'cors';
import morgan from 'morgan';

const ConfigExpress = (app: Application) => {
  app.use(cors());
  app.use(morgan('dev'));
  app.use(express.json());
};

export default ConfigExpress;