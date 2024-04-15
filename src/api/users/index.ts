import { Router } from 'express';
import passport from 'passport';
import { checkRole } from '@middleware/verifyRole';

import {
  getUsers,
  getUserById,
  getUserName,
  getEmail,
  createUser,
  deleteUser,
  updateUser
} from './user.controller';

const router = Router();

router.get(
  '/',
  passport.authenticate('jwt', { session: false }),
  checkRole('MODERATOR'),
  getUsers
);

router.get('/:email', getEmail);

router.get('/by-user-name/:userName', getUserName);

router.get(
  '/:id',
  passport.authenticate('jwt', { session: false }),
  checkRole('MODERATOR'),
  getUserById
);

router.post('/', createUser);

router.delete(
  '/:id',
  passport.authenticate('jwt', { session: false }),
  checkRole('MODERATOR', 'STUDENT'),
  deleteUser
);

router.put(
  '/:id',
  passport.authenticate('jwt', { session: false }),
  checkRole('MODERATOR', 'STUDENT'),
  updateUser
);

export default router;
