import { Router } from 'express';
import { healthcheckHandler } from './healthCheck.controller';

const router = Router();

router.get('/', healthcheckHandler);

export default router;
