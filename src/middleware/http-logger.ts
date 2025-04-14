/** @format */

import os from 'node:os';
import chalk from 'chalk';
import config from 'config';
import { format } from 'date-fns';
import { Request, Response } from 'express';
import morgan from 'morgan';

// Configuration ------------------------------------------------
const machineID = os.hostname();
const skip = () => config.get('env') !== 'development';
const MAX_AGENT_LENGTH = 40;

// Formatters ---------------------------------------------------
const formatResponseTime = (ms: string | undefined) => {
	const value = parseFloat(ms ?? '0');
	return `${value.toFixed(3)}ms`;
};

const formatContentLength = (
	req: Request,
	res: Response,
	tokens: morgan.TokenIndexer<Request, Response>
) => {
	const value = tokens.res?.(req, res, 'content-length');
	return (
		req.headers['accept-encoding'] ? chalk.gray('compressed')
		: value ? `${value} bytes`
		: '?'
	);
};

const parseUserAgent = (ua?: string): string => {
	if (!ua) return 'none';

	// Special case for curl
	if (ua.includes('curl')) {
		const version = ua.split('curl/')[1]?.split(' ')[0];
		return version ? `curl/${version}` : 'curl';
	}

	// Browser detection
	const match = ua.match(/(Firefox|Chrome|Safari|Edge|Opera)\/([\d.]+)/);
	return match ? `${match[1]}/${match[2]}` : ua.slice(0, MAX_AGENT_LENGTH);
};

// Colorizers ---------------------------------------------------
const colorizeMethod = (method: string): string => {
	const colorMap: Record<string, typeof chalk> = {
		GET: chalk.greenBright,
		POST: chalk.blueBright,
		PUT: chalk.yellowBright,
		DELETE: chalk.redBright,
		PATCH: chalk.cyanBright,
		HEAD: chalk.magentaBright,
	};

	// Safely get color function or default to white
	const colorFn = colorMap[method.toUpperCase()] ?? chalk.white;
	return colorFn(method);
};

// Type-safe status code coloring
const colorizeStatus = (status: string): string => {
	if (!status) return '';

	const statusCode = parseInt(status, 10);
	if (isNaN(statusCode)) return chalk.white(status);

	return (
		statusCode >= 500 ? chalk.red(status)
		: statusCode >= 400 ? chalk.yellow(status)
		: statusCode >= 300 ? chalk.cyan(status)
		: chalk.green(status)
	);
};

// Main Formatter -----------------------------------------------
export const httpLogFormatter = (
	tokens: morgan.TokenIndexer<Request, Response>,
	req: Request,
	res: Response
) => {
	// Timestamp and system info
	const timestamp = chalk.grey(format(new Date(), 'yyyy-mm-dd hh:mm:ss'));
	const pid = chalk.yellowBright(`(${process.pid})`);
	const systemInfo = `${timestamp} ${machineID} ${pid}`;

	// Method, URL, status
	const method = colorizeMethod(tokens.method?.(req, res) ?? '');
	const url = chalk.cyanBright(tokens.url?.(req, res) ?? '');
	const status = colorizeStatus(tokens.status?.(req, res) ?? '');
	const responseTime = chalk.green(
		formatResponseTime(tokens['response-time']?.(req, res))
	);

	return [
		systemInfo,
		`[${chalk.cyanBright('REQ 🛜')}]:`,
		`${method} ${url} → ${status} - ${responseTime}`,
		`| Content Length: ${chalk.magenta(formatContentLength(req, res, tokens))}`,
		`| IP: ${chalk.whiteBright(req.ip)}`,
		`| Agent: ${chalk.white(parseUserAgent(req.headers['user-agent']))}`,
	].join(' ');
};

// Export middleware --------------------------------------------
export const httpLogger = morgan(httpLogFormatter, { skip });

export default httpLogger;
