/** @format */

// Import modules
import { NextFunction, Request, Response } from 'express';

/**
 * This middleware redirects all non-API requests to the API path.
 * @param {Request} req - The Express request object.
 * @param {Response} res - The Express response object.
 * @param {NextFunction} next - The next middleware function.
 * @returns {void}
 */
export const globalRedirect = (
	req: Request,
	res: Response,
	next: NextFunction
): void => {
	// Check if the request path does not start with '/api'
	if (!req.path.startsWith('/api')) {
		// Extract the query string from the request URL
		const query = req.url.slice(req.path.length);
		// Redirect to the API path
		return res.redirect(301, '/api' + req.path + query);
	}

	// Call the next middleware
	next();
};
