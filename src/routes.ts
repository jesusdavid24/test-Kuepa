import { type Application } from 'express';
import healtCheckRouter from '@api/healtCheck';
import userRouter from '@api/users';
import authRouter from './auth/';

const routes = (app: Application) => {
  app.use('/api/', healtCheckRouter);
  app.use('/api/user', userRouter);
  app.use('/api/auth', authRouter);
};

export default routes;
