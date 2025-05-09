/** @format */

import { exit } from 'node:process';
import config from 'config';

import { createApp } from '@/src/app';
import { logger } from '@/src/utils/logger';

/**
 * Starts the Express server adn sets up listeners for events and graceful
 * shutdown.
 *
 * @returns {type name = void}
 */
export const startServer = (): void => {
	// Load the server configuration variables from config
	const host: string = config.get('host');
	const port: number = config.get('port');
	const protocol = config.get('protocol');
	const env = config.get('env');

	//Create the Express app instance
	const app = createApp();
	//Start listening on the configured host and port
	const server = app.listen(port, host);

	// Event: Server starts successfully
	server.on('listening', () => {
		logger.info(`Starting server in ${env} mode`);
		logger.info(`Server is listening at: ${protocol}://${host}:${port}`);

		if (env === 'development') logger.info('Press CTRL+C to stop the server');
	});

	// Event: Server encounters an error during startup or runtime
	server.on('error', (err: NodeJS.ErrnoException) => {
		logger.error('Server encountered an error:', err);

		if (err.code === 'EADDRINUSE') {
			logger.error(`Port ${port} is already in use.`);
			logger.error('1. Terminate the conflicting process, or');
			logger.error('2. Change the port in the server configuration.');
		}

		// Exit the process with a failure code
		exit(1);
	});

	//Event: Server is closed
	server.on('close', () => {
		logger.info('Cleaning up resources...');
		logger.info('Closing remaining connections');
	});

	/**
	 * Gracefully shuts down the server on termination signals (e.g., SIGINT,
	 * SIGTERM).
	 *
	 * @param signal - The termination signal received.
	 * @returns {type name = void}
	 */
	const gracefulShutdown = (signal: string): void => {
		logger.warn(`${signal} signal received`);

		server.close(() => {
			logger.info('Server closed gracefully');
			exit(0);
		});
	};

	// Handle termination signals for graceful shutdown
	process.on('SIGTERM', () => gracefulShutdown('SIGTERM'));
	process.on('SIGINT', () => gracefulShutdown('SIGINT'));

	// Global handler for: uncaught exceptions
	process.on('uncaughtException', (err) => {
		logger.error('Uncaught exception:', err);
		exit(1);
	});

	// Global handler for: unhandled promise rejections
	process.on('unhandledRejection', (reason) => {
		logger.error('Unhandled rejection:', reason);
		exit(1);
	});
};
