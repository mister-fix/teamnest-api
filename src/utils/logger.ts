/**
 * API Logger utility, providing useful logging methods.
 *
 * @module utils/Logger
 * @format
 * @requires winston
 */
import chalk from 'chalk';
import winston, { format } from 'winston';

const consoleFormat = winston.format.combine(
	format.splat(),
	format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
	format.printf(({ timestamp, level, message }) => {
		const pid = chalk.yellowBright(String(process.pid));
		const isDev = process.env.NODE_ENV !== 'production';
		const coloredTimestamp = chalk.grey(timestamp);

		return isDev ?
				`${coloredTimestamp} (${pid}) [${level.toUpperCase()}]: ${message}`
			:	`${message}`;
	})
);

export const logger = winston.createLogger({
	level: 'info',
	format: consoleFormat,
	transports: [
		new winston.transports.Console(),
		new winston.transports.File({
			filename: './logs/error.log',
			level: 'error',
		}),
	],
});

// logger.info('Info logger', 'logger 2');
