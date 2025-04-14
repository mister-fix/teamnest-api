/** @format */

import config from 'config';
import { Request, Response } from 'express';

import { logger } from '@/src/utils/logger';

interface CustomError extends Error {
	status?: number;
	stack?: string;
}

export const errorHandler = (
	err: CustomError | Error,
	_req: Request,
	res: Response
): void => {
	// Ensure the error is an instance of Error
	if (!(err instanceof Error)) {
		err = new Error('An unexpected error occurred');
	}

	// Determine the status code
	const statusCode = (err as CustomError)?.status || 500;

	// Prepare the error response
	const isProduction = config.get('env') === 'production';
	const errorResponse = {
		message: err.message || 'Internal Server Error',
		statusCode,
		...(isProduction ? {} : { stack: err.stack }),
		timestamp: new Date().toISOString(),
	};

	// Log the error
	logger.error('Error:', err.message);

	if (!isProduction) {
		logger.error('Stack:', err.stack);
	}

	// Send the error response
	res.status(statusCode).json(errorResponse);
};
