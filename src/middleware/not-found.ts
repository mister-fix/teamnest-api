/** @format */

import console from 'node:console';
import config from 'config';
import { NextFunction, Request, Response } from 'express';
import createError from 'http-errors';

export const notFoundHandler = (
	req: Request,
	res: Response,
	next: NextFunction
): void => {
	const isProduction = config.get('env') === 'production';
	const errorMessage = `The requested resource '${req.originalUrl}' was not found`;

	console.warn(`[404] ${req.method}: ${req.originalUrl}`);

	res.status(404).json({
		message: isProduction ? 'Resource not found' : errorMessage,
		statusCode: 404,
		method: req.method,
		timestamp: new Date().toISOString(),
	});

	next(createError(404, errorMessage));
};
