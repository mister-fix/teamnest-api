/** @format */

// Import modules
import { Router } from 'express';

import { logger } from '@/src/utils/logger';
import { createHealthController } from './controller';

/**
 * This router handles health check endpoints for the application.
 * @returns {Router} - The health router for the application.
 */
export const createHealthRouter = (): Router => {
	// Initializing router
	const router = Router();

	const { getLiveness, getReadiness } = createHealthController({ logger });

	// Routes
	router.get('/liveness', getLiveness);
	router.get('/readiness', getReadiness);

	// Return health router
	return router;
};
