/** @format */

import console from 'node:console';
import config from 'config';
import { RequestHandler } from 'express';

export const notFound: RequestHandler = (req, res, next) => {
	const errorMessage = `The requested resource '${req.originalUrl}' was not found`;

	console.error('404 Not Found: ', errorMessage);

	res.status(404);

	next({
		message: errorMessage,
		statusCode: 404,
		stack: config.get('env') === 'production' ? undefined : new Error().stack,
	});
};
