import { NextFunction, Request, Response } from 'express';

/**
 * Interface for custom error objects
 */
interface ErrorWithStatus extends Error {
	statusCode?: number;
	stack?: string;
}

/**
 * Middleware to handle all errors.
 * @param err - The error object.
 * @param req - The Express request object.
 * @param res - The Express response object.
 * @param next - The Express next function.
 */
export const errorHandler = (
	err: ErrorWithStatus,
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
	// eslint-disable-next-line no-console
	console.error(`Error: ${err.message}`);
	// eslint-disable-next-line no-console
	console.error(`Error: ${err.stack}`);

	// Send the error response
	res.status(statusCode).json(errorResponse);
};
