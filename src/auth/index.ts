import { Router } from 'express';
import passport from 'passport';

import { login, sendEmailRecovery, changesPasswords } from './auth.controller';

const router = Router();

router.post('/', passport.authenticate('local', { session: false }), login);
router.post('/recovery', sendEmailRecovery);
router.post('/change-password', changesPasswords);

export default router;
