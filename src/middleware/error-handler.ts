import { NextFunction, Request, Response } from 'express';

import logger from '@/utils/logger';

/**
 * Interface for custom error objects.
 */
interface CustomError extends Error {
	statusCode?: number;
	stack?: string;
}

/**
 * Middleware to handle all errors.
 * @param err - Error object.
 * @param req - Express request object.
 * @param res - Express response object.
 * @param next - Express next function.
 */
export const errorHandler = (
	err: CustomError,
	req: Request,
	res: Response,
	_next: NextFunction
) => {
	// Determine the status code (default to 500 if not provided)
	const statusCode = err.statusCode || 500;

	// Create a structured error response
	const errorResponse = {
		message: err.message || 'Internal Server Error',
		statusCode,
		stack: process.env.NODE_ENV === 'production' ? undefined : err.stack,
	};

	// Log the error for debugging purposes
	logger.error(`Error: ${err.message}`);
	logger.error(`Error: ${err.stack}`);

	// Send the error response
	res.status(statusCode).json(errorResponse);
};
