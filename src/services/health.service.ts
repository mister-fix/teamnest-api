/** @format */

// import console from 'node:console';
import os from 'node:os';
// import { PrismaClient } from '@prisma/client';
import config from 'config';

import {
	checkDatabaseConnection,
	getCachedCpuUsage,
	getCachedMemory,
	getCachedUptime,
} from '../utils/health.utils';

// const prisma = new PrismaClient();

const APP_NAME = config.get<string>('name') || 'Teamnest API';
const APP_VERSION = config.get<string>('version');

export const getSystemStatus = () => {
	const checks = {
		// database: await checkDatabase(),
		diskSpace: checkDiskSpace(),
	};

	const isHealthy = Object.values(checks).every(
		(check) => check.status === 'OK'
	);

	return {
		status: isHealthy ? 'healthy' : 'degraded',
		checks,
	};
};

// const checkDatabase = async () => {
// 	try {
// 		await prisma.$queryRaw`SELECT 1`;
// 		return { status: 'OK', message: 'Database is connected' };
// 	} catch (err: unknown) {
// 		console.error('Database connection failed:', err);
// 		return { status: 'ERROR', message: 'Database connection failed' };
// 	}
// };

const checkDiskSpace = () => {
	const threshold =
		Number(config.get('health.minDiskSpace')) || 100 * 1024 * 1024; // 100 MB
	const free = os.freemem();

	return {
		status: free > threshold ? 'OK' : 'WARNING',
		free: `${free}MB`,
		threshold: `${threshold}MB`,
	};
};

export const getLivenessData = () => {
	return {
		timestamp: new Date().toISOString(),
		status: 'OK',
		message: 'API is alive',
		uptime: getCachedUptime(),
		memory: getCachedMemory(),
		cpu: getCachedCpuUsage(),
		app: APP_NAME,
		version: APP_VERSION,
		hostname: os.hostname(),
	};
};

export const getReadinessData = () => {
	const isDBConnected = checkDatabaseConnection();

	return {
		status: isDBConnected ? 'OK' : 'ERROR',
		message: isDBConnected ? 'API is ready' : 'API readiness check failed',
		database: isDBConnected ? 'Connected' : 'Disconnected',
		app: APP_NAME,
		version: APP_VERSION,
	};
};
