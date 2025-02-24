import { default as expressWinston } from 'express-winston';
import winston from 'winston';

import expressWinstonFormat from '@/config/express-winston-format';

/**
 * @name winstonExpressLogger
 * @description Custom middleware for logging HTTP requests.
 */
const winstonExpressLogger = expressWinston.logger({
	transports: [
		new winston.transports.File({
			filename: 'logs/requests.log',
		}),
		new winston.transports.File({
			filename: './logs/combined.log', // Log file path for combined logs
		}),
	],
	format: winston.format.combine(
		winston.format.colorize(), // Colorizes the output in the console
		winston.format.json(), // Formats the logs in JSON for better readability
		expressWinstonFormat // Apply custom formatting for logs
	),
	meta: true, // Controls whether to log metadata about each request (default: true)
	msg: 'HTTP {{req.method}} {{req.url}}', // Custom logging message for each HTTP request.
	expressFormat: true, // Uses default Express/morgan request formatting for more readable logs.
	colorize: false, // Controls text and status code colors based on Express/morgan color palette.

	/**
	 * Ignore specific routes based on request/response.
	 * You can customize this function to skip logging for certain routes.
	 * Example: Return true to skip logging for static files or health check endpoints.
	 */
	ignoreRoute: function (_req, _res) {
		return false; // Always logs by default. Customize this to skip specific routes if needed.
	},
});

// Exporting middleware
export default winstonExpressLogger;
