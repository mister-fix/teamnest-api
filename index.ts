/** @format */
import console from 'node:console';
import { exit } from 'node:process';
import config from 'config';

import app from '@/src/app';

const protocol: string = config.get('protocol');
const host: string = config.get('host');
const port: number = config.get('port');
const env: string = config.get('env');

const server = app.listen(port, host);

server.on('listening', () => {
	console.log(`Server environment: ${env}`);
	console.log(`Server listening on: ${protocol}://${host}:${port}`);
	console.log(`Press CTRL-C to stop`);
});

server.on('error', (err: NodeJS.ErrnoException) => {
	console.error('Server encountered an error:', err);

	if (err.code === 'EADDRINUSE') {
		console.error(`Port ${port} is already in use. Please:`);
		console.error(`1. Terminate the conflicting process, or`);
		console.error(`2. Change PORT in '.env' file`);
	}

	exit(1);
});

server.on('close', () => {
	console.log('Cleaning up resources...');
	console.log('Closing remaining connections');
});

process.on('SIGTERM', () => {
	console.warn('SIGTERM signal received');

	server.close(() => {
		exit(0);
	});
});

process.on('SIGINT', () => {
	console.warn('SIGINT signal received');

	server.close(() => {
		exit(0);
	});
});
