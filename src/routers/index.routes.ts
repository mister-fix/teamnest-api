/** @format */

// Import necessary modules
import os from 'node:os';
import config from 'config';
import { Router } from 'express';

import { getSystemStatus } from '../services/health.service';

// Create a new router instance
const router = Router();

// Endpoints
router.get('/', async (_req, res) => {
	const { status } = await getSystemStatus();

	res.json({
		api: 'Teamnest API',
		version: config.get('version'),
		status,
		environment: process.env.NODE_ENV,
		uptime: process.uptime().toFixed(2) + ' seconds',
		server: {
			hostname: os.hostname(),
		},
		links: {
			documentation: 'https://github.com/mister-fix/teamnest-api#readme',
			liveness: '/api/health/liveness',
			readiness: '/api/health/liveness',
			// swagger: '/api-docs',
		},
	});
});

// Export the router
export default router;
