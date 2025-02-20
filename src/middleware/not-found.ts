import { NextFunction, Request, Response } from 'express';

/**
 * Middleware to handle 404 Not Found errors.
 * @param req - Express request object.
 * @param res - Express response object.
 * @param next - Express next function.
 */
export const unknownEndpoint = (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	// Create a detailed error message
	const errorMessage = `The requested resource '${req.originalUrl}' was not found.`;

	// Log the error for debugging purposes
	// eslint-disable-next-line no-console
	console.error(`404 Not found: ${errorMessage}`);

	// Set the response status to 404
	res.status(404);

	// Pass the error the to the next middleware
	next({
		message: errorMessage,
		statusCode: 404,
		stack:
			process.env.NODE_ENV === 'production' ? undefined : new Error().stack,
	});
};
