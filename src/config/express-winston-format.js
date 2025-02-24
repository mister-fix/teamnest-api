import { format } from 'date-fns';
import { v4 as uuid } from 'uuid';
import winston from 'winston';

/**
 * @name customWinstonFormat
 * @description Custom Winston format for log messages
 */
const customWinstonFormat = winston.format.printf((info) => {
	// Format log messages with timestamp, unique identifier, and log message
	return `${format(new Date(), 'yyyyMMdd\tHH:mm:ss')}\t${uuid()}\t${info.message}`;
});

// Exporting the custom Winston format for use in other modules
export default customWinstonFormat;
