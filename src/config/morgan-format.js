import os from 'os';

import chalk from 'chalk';
import { format } from 'date-fns';
import morgan from 'morgan';

// Get the machine hostname (machine ID)
const machineID = os.hostname();

// Creating a custom 'timestamp' token for Morgan, which returns the current date and time in 'yyyy-mm-dd hh:mm:ss' format
morgan.token('timestamp', () => {
	return format(new Date(), 'yyyy-mm-dd hh:mm:ss');
});

/**
 * @name morganFormat
 * @description Custom logging format for the 'morgan' HTTP request logger.
 * The format varies depending on the application's environment.
 *
 * - In **development** mode `(NODE_ENV !== 'production'`), the log includes:
 *  - Timestamp (ISO format) in grey
 *  - Server identifier
 *  - Log level indicator `[info]` in bright cyan
 *  - HTTP method, URL, and status code
 *  - Response size and response time in milliseconds
 *
 * - In **production** mode (`NODE_ENV === 'production'`), the log includes:
 *  - HTTP method, URL, and status code
 *  - Response size and response time in milliseconds
 */
const morganFormat =
	process.env.NODE_ENV !== 'production'
		? `${chalk.grey(':timestamp')} ${machineID} (${chalk.yellowBright(process.pid)}) [${chalk.cyanBright('REQ 🛜')}]: :method :url :status - :res[content-length] :response-time ms`
		: ':method :url :status - :res[content-length] :response-time ms';

// Exporting format
export default morganFormat;
