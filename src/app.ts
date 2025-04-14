/** @format */

import compression from 'compression';
import cors from 'cors';
import express, { Application, Request } from 'express';
import { rateLimit } from 'express-rate-limit';
import helmet from 'helmet';

import { corsOptions } from '@/src/libs/cors';
import { expressMiddleware, expressSettings } from '@/src/libs/express';
import { errorHandler } from '@/src/middleware/error-handler';
import { httpLogger } from '@/src/middleware/http-logger';
import { notFoundHandler } from '@/src/middleware/not-found';

export const createApp = () => {
	// Create an instance of the Express application
	const app: Application = express();

	// Application settings
	Object.entries(expressSettings).forEach(([key, value]) => {
		app.set(key, value);
	});

	// Initialization and security middleware
	app.use(cors<Request>(corsOptions));
	app.use(helmet());
	app.use(
		compression({
			threshold: '1kb',
			filter: (req) => !req.path.includes('health'),
		})
	);

	// General rate limiting
	const limiter = rateLimit({
		windowMs: 15 * 60 * 1000,
		max: 10,
		standardHeaders: 'draft-8',
		legacyHeaders: false,
	});
	app.use(limiter);

	// Body parsing middleware
	app.use(express.json(expressMiddleware.json));
	app.use(express.urlencoded(expressMiddleware.urlencoded));

	// Logging
	app.use(httpLogger);

	// Health check
	app.get('/health', (_req, res) => {
		res.status(200).json({ status: 'UP' });
	});

	// Routes
	app.get('/', (_req, res) => {
		res.send('Hello World');
	});

	// 404 middleware
	app.use(notFoundHandler);

	// Error handling
	app.use(errorHandler);

	return app;
};
