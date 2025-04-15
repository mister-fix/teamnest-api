/** @format */

// Import modules
import config from 'config';
import { Router } from 'express';

import { createHealthRouter } from '@/src/api/health/router';

/**
 * This router serves as the entry point for the application.
 * @returns {Router} - The main router for the application.
 */
export const createMainRouter = (): Router => {
	const router = Router();
	const healthRouter = createHealthRouter();

	router.get('/', (_req, res): void => {
		res.status(200).json({
			name: config.get('name'),
			version: config.get('version'),
		});
	});

	// Routes
	router.use('/health', healthRouter);

	// Return router
	return router;
};
