import app from '@/app';
import config from 'config';

const host: string = config.get('host');
const port: number = config.get('port');

const server = app.listen(port, host);

// Handle server listening
server.on('listening', () => {
	console.log(`Server environment: ${app.get('env')}`);
	console.log(`Server is listening on: http://${host}:${port}`);
	console.log('Press CTRL-C to stop');
});

// Handle server errors
server.on('error', (err: NodeJS.ErrnoException) => {
	console.error('❌ Server error:', err);

	if (err.code === 'EADDRINUSE') {
		console.error(
			`❌ Port ${port} is already in use. Please free the port or use a different one.`
		);
	}

	process.exit(1); // Exit with failure code
});

// Handle server shutdown
server.on('close', () => {
	console.info('Cleaning up resources...');
	console.info('Closing remaining connections...');
});

// Gracefully handle process termination signals (e.g., Ctrl+C, etc.)
process.on('SIGTERM', () => {
	console.warn('SIGTERM signal received');

	// Close the server before exiting
	server.close(() => {
		// eslint-disable-next-line n/no-process-exit
		process.exit(0);
	});
});

process.on('SIGINT', () => {
	console.warn('SIGINT signal received');

	// Close the server before exiting
	server.close(() => {
		// eslint-disable-next-line n/no-process-exit
		process.exit(0);
	});
});
