/**
 * Express router providing user-related routes.
 * @module routers/main
 * @requires express
 */

/**
 * Express framework module
 * @external express
 * @see {@link https://expressjs.com/|Express Documentation}
 * @description This module is used to create and manage an Express application.
 */
import { Request, Response, Router } from 'express';

import healthRouter from './health-router';

/**
 * Express router to mount user related functions on.
 */
const router = Router();

/**
 * Place your router methods and endpoints below.
 */
router.get('/', (req: Request, res: Response) => {
	res.status(200).json({
		status: 'OK',
		message: 'Hello from the API👋',
	});
});

router.use('/health', healthRouter);

// Export router to be used in other parts of the API
export default router;
