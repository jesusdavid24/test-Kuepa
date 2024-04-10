import type { Request, Response } from 'express';

export const healthcheckHandler = (req: Request, res: Response) => {
  return res.status(200).send({ message: 'Server ok' });
};
