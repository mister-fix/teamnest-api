/** @format */

// Import modules
import { RequestHandler } from 'express';
import createError from 'http-errors';

import { createHealthService } from './service';

/** @format */

type HealthControllerDeps = {
	logger: {
		error: (...args: unknown[]) => void;
	};
};

interface LivenessResponse {
	timestamp?: string;
	status?: string;
	uptime?: string;
	memory?: NodeJS.MemoryUsage;
	cpu?: NodeJS.CpuUsage;
	app?: string;
	version?: string;
	hostname?: string;
}

interface ReadinessResponse {
	status?: string;
	message?: string;
	database?: string;
	app?: string;
	version?: string;
}

/**
 * Creates a health controller with liveness and readiness check endpoints.
 * @param {HealthControllerDeps} deps - The dependencies for the controller.
 * @param {import('@/types').Logger} deps.logger - Logger instance used for error logging.
 * @returns {{ getLiveness: RequestHandler, getReadiness: RequestHandler }} - The health controller methods.
 */
export const createHealthController = ({ logger }: HealthControllerDeps) => {
	const { getLivenessData, getReadinessData } = createHealthService();

	const getLiveness: RequestHandler = (_req, res, next) => {
		try {
			const response: LivenessResponse = getLivenessData();
			res.status(200).json(response);
		} catch (err) {
			logger.error('Error performing liveness check:', err);

			res.status(500).json({
				status: 'Error',
				message: 'API is not responding',
				error: err instanceof Error ? err.message : 'Unknown error',
			});

			next(createError(500, 'API is not responding'));
		}
	};

	const getReadiness: RequestHandler = (_req, res, next) => {
		try {
			const response: ReadinessResponse = getReadinessData();
			const statusCode = response.status === 'OK' ? 200 : 503;

			res.status(statusCode).json(response);
		} catch (err) {
			logger.error('Error performing readiness check:', err);

			res.status(500).json({
				status: 'Error',
				message: 'API is not ready',
				error: err instanceof Error ? err.message : 'Unknown error',
			});

			next(createError(500, 'API is not ready'));
		}
	};

	return { getLiveness, getReadiness };
};
