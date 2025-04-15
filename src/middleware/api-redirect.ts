/** @format */

// Import modules
import { RequestHandler } from 'express';

/**
 * This middleware redirects all non-API requests to the API path.
 * @param req - The Express request object.
 * @param res - The Express response object.
 * @param next - The next middleware function.
 * @returns {void}
 */
export const globalRedirect: RequestHandler = (req, res, next): void => {
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
