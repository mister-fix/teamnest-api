/**
 * API Logger utility, providing useful logging methods.
 * @module utils/Logger
 * @requires winston
 */

import os from 'os';

import chalk from 'chalk';
import winston, { createLogger, format, transports } from 'winston';

// Get the machine hostname (machine ID)
const machineID = os.hostname();

// Define custom levels and colors
const customLevels = {
	levels: {
		fatal: 0,
		error: 1,
		warn: 2,
		success: 3,
		info: 4,
		verbose: 5,
		debug: 6,
	},
	colors: {
		fatal: 'white bgRed',
		error: 'red',
		warn: 'yellow',
		success: 'green',
		info: 'white',
		verbose: 'cyan',
		debug: 'magenta',
	},
};

// Define custom level abbreviations
const levelAbbreviations = {
	fatal: 'FTL 💣',
	error: 'ERR 🔥',
	warn: 'WRN ⚠️',
	success: 'SUC ✅',
	info: 'INF ℹ️',
	verbose: 'VRB 📃',
	debug: 'DBG 🔎',
} as const;

// Defines a type that restricts log levels to the keys of levelAbbreviations
type LogLevel = keyof typeof levelAbbreviations;

// Add custom colors to winston
winston.addColors(customLevels.colors);

// Define the console log format for the console transport
const consoleFormat = winston.format.combine(
	format.splat(),
	format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }), // Adds timestamp
	// format.align(),
	format.printf(({ timestamp, level, message }) => {
		const pid = chalk.yellowBright(String(process.pid));
		const isDev = process.env.NODE_ENV !== 'production';
		const coloredTimestamp = chalk.grey(timestamp);

		return isDev
			? `${coloredTimestamp} ${machineID} (${pid}) [${level}]: ${message}`
			: `${message}`;
	})
);

// Define the file log format for the file transport
const fileFormat = format.combine(
	format.splat(),
	format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
	format.printf(({ timestamp, level, message }) => {
		return `${timestamp} ${machineID} (${process.pid}) [${level}]: ${message}`;
	})
);

/**
 * @name logger
 * @description Custom API logging function.
 * @function
 * @constant
 */
const customLogger = createLogger({
	levels: customLevels.levels,
	// Define the transports
	transports: [
		// Console transport with color formatting
		new transports.Console({
			level: 'debug',
			format: format.combine(
				format((info) => {
					info.level = levelAbbreviations[info.level as LogLevel].toUpperCase();
					return info;
				})(),
				format.colorize({ all: true }), // Adds color to the log level
				consoleFormat // Apply common format with timestamp and message
			),
		}),

		// Combined file transport (logs all levels)
		new transports.File({
			filename: './logs/combined.log',
			format: format.combine(
				format((info) => {
					info.level = levelAbbreviations[info.level as LogLevel]
						.slice(0, 3)
						.toUpperCase();
					return info;
				})(),
				fileFormat
			),
		}),

		// Info level transport
		new transports.File({
			filename: './logs/info.log',
			level: 'info', // Only logs of level 'info' will be written here
			format: format.combine(
				format((info) => {
					info.level = levelAbbreviations[info.level as LogLevel]
						.slice(0, 3)
						.toUpperCase();
					return info;
				})(),
				fileFormat
			),
		}),

		// Warning level transport
		new transports.File({
			filename: './logs/warnings.log',
			level: 'warn', // Only logs of level 'warn' and higher will be written here
			format: format.combine(
				format((info) => {
					info.level = levelAbbreviations[info.level as LogLevel]
						.slice(0, 3)
						.toUpperCase();
					return info;
				})(),
				fileFormat
			),
		}),

		// Error level transport
		new transports.File({
			filename: './logs/errors.log',
			level: 'error', // Only logs of level 'error' and higher will be written here
			format: format.combine(
				format((info) => {
					info.level = levelAbbreviations[info.level as LogLevel]
						.slice(0, 3)
						.toUpperCase();
					return info;
				})(),
				fileFormat
			),
		}),
	],
});

interface Logger extends winston.Logger {
	fatal: winston.LeveledLogMethod;
	success: winston.LeveledLogMethod;
}

const logger = customLogger as Logger;

/**
 * Example usage of custom logger
 * -----------------------------------------------
 * -----------------------------------------------
 * logger.fatal('This is a fatal message');
 * logger.error('This is an error message');
 * logger.warn('This is a warning message');
 * logger.success('This is a success message');
 * logger.info('This is an info message');
 * logger.verbose('This is a verbose message');
 * logger.debug('This is a debug message');
 */

// Exporting logger
export default logger;
