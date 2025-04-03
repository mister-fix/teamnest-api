/** @format */

import console from 'node:console';
import { RequestHandler } from 'express';

import { getLivenessData, getReadinessData } from '../services/health.service';

interface LivenessResponse {
	timestamp?: string;
	status?: string;
	uptime?: string;
	memory?: NodeJS.MemoryUsage;
	cpu?: NodeJS.CpuUsage;
	app: string;
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

export const getLiveness: RequestHandler = (_req, res, next) => {
	try {
		const response: LivenessResponse = getLivenessData();
		res.status(200).json(response);
	} catch (err) {
		console.error('Error performing liveness check:', err);
		res.status(500).json({
			status: 'ERROR',
			message: 'API is not responding',
			error: err instanceof Error ? err.message : 'Unknown error',
		});

		next(err);
	}
};

export const getReadiness: RequestHandler = (_req, res, next) => {
	try {
		const response: ReadinessResponse = getReadinessData();
		const statusCode = response.status === 'OK' ? 200 : 503;

		res.status(statusCode).json(response);
	} catch (err) {
		console.error('Error performing readiness check:', err);

		res.status(500).json({
			status: 'ERROR',
			message: 'API readiness check failed',
			error: err instanceof Error ? err.message : 'Unknown error',
		});

		next(err);
	}
};
