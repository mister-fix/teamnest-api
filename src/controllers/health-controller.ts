import { Request, Response } from 'express';
import mongoose from 'mongoose';

/**
 * Place your controller methods here
 * ex: export const methodName = (req: Request, res: Response) => {}
 *
 */

export const getLiveness = (req: Request, res: Response): void => {
	res.status(200).json({
		status: 'OK',
		message: 'API is alive👌',
	});

	return;
};

export const getReadiness = (req: Request, res: Response): void => {
	const isDBConnected = mongoose.connection.readyState === 1;

	if (!isDBConnected) {
		res.status(503).json({
			status: 'ERROR',
			message: 'Database not ready',
			database: 'Disconnected',
		});

		return;
	}

	res.status(200).json({
		status: 'OK',
		message: 'API is ready',
		database: 'Connected',
		app: req.app.get('app name'),
		version: req.app.get('api version'),
	});

	return;
};
