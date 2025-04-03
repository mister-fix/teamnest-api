/** @format */

import console from 'node:console';
import config from 'config';
import { Request, Response } from 'express';

interface CustomError extends Error {
	statusCode?: number;
	stack?: string;
}

export const errorHandler = (
	err: CustomError,
	_req: Request,
	res: Response
) => {
	const statusCode = err.statusCode || 500;
	const errorResponse = {
		message: err.message || 'Internal Server Error',
		statusCode,
		stack: config.get('env') === 'production' ? undefined : err.stack,
	};

	console.error('Error:', err.message);
	console.error('Stack:', err.stack);

	res.status(statusCode).json(errorResponse);
};
