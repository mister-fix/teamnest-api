/** @format */

// Import modules
import { Request, Response } from 'express';

interface CustomError extends Error {
	status?: number;
	stack?: string;
}

type ErrorHandlerDeps = {
	isProduction: boolean;
	logger: {
		error: (...args: any[]) => void;
	};
};

type ErrorHandler = (
	err: CustomError | Error,
	_req: Request,
	res: Response
) => void;

/**
 * This middleware handles errors that occur during the request lifecycle.
 * @param err - The error object
 * @param _req - The request object
 * @param res - The response object
 * @returns {void}
 */
export const createErrorHandler = ({
	isProduction,
	logger,
}: ErrorHandlerDeps): ErrorHandler => {
	return (err: CustomError | Error, _req: Request, res: Response): void => {
		// Ensure the error is an instance of Error
		if (!(err instanceof Error)) {
			err = new Error('An unexpected error occurred');
		}

		// Determine the status code
		const statusCode = (err as CustomError)?.status || 500;

		// Prepare the error response
		const errorResponse = {
			message: err.message || 'Internal Server Error',
			statusCode,
			...(isProduction ? {} : { stack: err.stack }),
			timestamp: new Date().toISOString(),
		};

		//Log the error
		logger.error('Error:', err.message);

		if (!isProduction) {
			logger.error('Stack:', err.stack);
		}

		// Send the error response
		res.status(statusCode).json(errorResponse);
	};
};
