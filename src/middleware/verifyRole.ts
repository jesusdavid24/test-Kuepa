import {
  type Request,
  type Response,
  type NextFunction
} from 'express';

import { type User } from '@api/users/user.types';

export function checkRole(...role: string[]) {
  return (req: Request, res: Response, next: NextFunction) => {
    const user = req.user as User;
    if (role.includes(user.role)) {
      next(); 
    } else {
      return res.json({ message: 'Forbidden' })
    }
  };
}