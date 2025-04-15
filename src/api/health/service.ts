/** @format */

// Import modules
import os from 'node:os';
import config from 'config';

import { getCachedCpuUsage, getCachedMemory, getCachedUptime } from './utils';

/** @format */

/** @format */

export const createHealthService = () => {
	const APP_NAME = config.get<string>('name') || 'Teamnest API';
	const APP_VERSION = config.get<string>('version');

	// const getSystemStatus = (): object => {
	// 	const checks = {
	// 		diskSpace: checkDiskSpace(),
	// 	};

	// 	const isHealthy = Object.values(checks).every(
	// 		(check) => check.status === 'OK'
	// 	);

	// 	return {
	// 		status: isHealthy ? 'healthy' : 'degraded',
	// 		checks,
	// 	};
	// };

	// const checkDiskSpace = () => {
	// 	const threshold: number = 1028; // 100 MB
	// 	const free = os.freemem();

	// 	return {
	// 		status: free > threshold ? 'OK' : 'WARNING',
	// 		free: `${free}MB`,
	// 		threshold: `${threshold}MB`,
	// 	};
	// };

	const getLivenessData = () => {
		const isProduction = config.get('env') === 'production';
		const base = {
			timestamp: new Date().toISOString(),
			message: 'API is alive',
			uptime: getCachedUptime(),
			app: APP_NAME,
			version: APP_VERSION,
		};

		if (!isProduction) {
			return {
				...base,
				memory: getCachedMemory(),
				cpu: getCachedCpuUsage(),
				hostname: os.hostname(),
			};
		}

		return base;
	};

	const getReadinessData = () => {
		const dbCheck = {
			status: 'OK',
		};

		return {
			status: dbCheck.status,
			message:
				dbCheck.status === 'ERROR' ?
					'API readiness check failed'
				:	'API is ready',
			database: dbCheck.status === 'OK' ? 'Connected' : 'Not connected',
			app: APP_NAME,
			version: APP_VERSION,
		};
	};

	return { getLivenessData, getReadinessData };
};
