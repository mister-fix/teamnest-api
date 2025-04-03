/** @format */

import { Router } from 'express';

import * as controller from '../controllers/health.controller';

const router = Router();

router.get('/liveness', controller.getLiveness);
router.get('/readiness', controller.getReadiness);

export default router;
