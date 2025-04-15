/** @format */

import compression from 'compression';
import config from 'config';
import cors from 'cors';
import express, { Application, Request } from 'express';
import { rateLimit } from 'express-rate-limit';
import helmet from 'helmet';

import { corsOptions } from '@/src/libs/cors';
import { expressMiddleware, expressSettings } from '@/src/libs/express';
import { globalRedirect } from '@/src/middleware/api-redirect';
import { createErrorHandler } from '@/src/middleware/error-handler';
import { httpLogger } from '@/src/middleware/http-logger';
import { createNotFoundHandler } from '@/src/middleware/not-found';
import { createMainRouter } from '@/src/routes/index';
import { logger } from '@/src/utils/logger';

export const createApp = () => {
	// Create the Express application instance
	const app: Application = express();
	// Initialize the main router for API routes
	const mainRouter = createMainRouter();
	// Determine if the environment is production
	const isProduction = config.get('env') === 'production';
	// Create the 404 Not Found handler
	const notFoundHandler = createNotFoundHandler({ isProduction, logger });
	//Create the global error handler
	const errorHandler = createErrorHandler({ isProduction, logger });

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
		windowMs: 15 * 60 * 1000, // 15 minute window
		max: 10, // Limit each IP to 10 requests per window
		standardHeaders: 'draft-8', // Use standardized rate limit headers
		legacyHeaders: false, // Disable legacy rate limit headers
	});
	app.use(limiter);

	// Body parsing middleware
	app.use(express.json(expressMiddleware.json));
	app.use(express.urlencoded(expressMiddleware.urlencoded));

	// Logging middleware: Log HTTP requests
	app.use(httpLogger);

	// Redirect middleware: Handle global redirects to non-API prefixed routes
	app.use(globalRedirect);

	// API routes: Mount the main router under the `api` path
	app.use('/api', mainRouter);

	// 404 middleware: Handle requests to unknown routes
	app.use(notFoundHandler);

	// Error handling middleware: Handle all errors globally
	app.use(errorHandler);

	// Return the configured Express application instance
	return app;
};
