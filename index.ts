import { config } from 'dotenv';

import app from '@/app';
import logger from '@/utils/logger';

// Load environment variables
config();

// Configure the server host from the environment variables
const host = process.env.HOST ?? '0.0.0.0'; // '0.0.0.0' is production fallback

// Configure the server port from the environment variables
const port: number = Number(process.env.PORT) || 3000;

const startServer = (portToUse: number) => {
	const server = app.listen(portToUse, host);

	server.on('listening', () => {
		logger.info(`Server running on: http://${host}:${portToUse}`);
	});

	server.on('error', (error: NodeJS.ErrnoException) => {
		// If port is already in use, try the next port
		if (error?.code === 'EADDRINUSE') {
			logger.warn(`Port ${portToUse} is in use. Trying another port...`);
			startServer(portToUse + 1); // Try the next port
		} else {
			// Handle other errors
			logger.error('Server encountered an error: ', error);
		}
	});

	server.on('close', () => {
		logger.info('Shutting down server...');
		logger.info('Cleaning up resources...');
	});
};

// Attempt to start the server on the configured port
startServer(port);
