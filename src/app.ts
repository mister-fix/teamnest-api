/** @format */

import compression from 'compression';
import config from 'config';
import cors from 'cors';
import express, { Application, Request } from 'express';
import { rateLimit } from 'express-rate-limit';
import helmet from 'helmet';
import morgan from 'morgan';

// import prettyMs from 'pretty-ms';

import { corsOptions } from './config/cors';
import { helmetConfig } from './config/csp';
import { expressMiddleware, expressSettings } from './config/express';
import { errorHandler } from './middleware/error-handler.middleware';
import { notFound } from './middleware/not-found.middleware';
import router from './routers/main.routes';

const app: Application = express();

// Application settings
Object.entries(expressSettings).forEach(([key, value]) => {
	app.set(key, value);
});

// Initialization and security middleware
app.use(cors<Request>(corsOptions));
app.use(helmet(helmetConfig));
app.use(
	compression({
		threshold: '1kb',
		filter: (req) => !req.path.includes('health'),
	})
);

// General rate limiting
const limiter = rateLimit({
	windowMs: 15 * 60 * 1000, // 15 minutes
	max: 10, // Limit each IP to 10 requests per window
	// keyGenerator: (req) => req.ip,
	standardHeaders: 'draft-8',
	legacyHeaders: false, // Disable the `X-RateLimit-*` headers
});
app.use(limiter);

// Body parsing middleware
app.use(express.json(expressMiddleware.json));
app.use(express.urlencoded(expressMiddleware.urlencoded));

// Logging middleware
app.use(morgan(config.get('env') === 'development' ? 'dev' : 'common'));

// Redirect
app.get('/', (_req, res) => {
	res.redirect('/api');
});

// Routes
app.use('/api', router);

// 404 Not Found middleware
app.use(notFound);
// Error handling middleware
app.use(errorHandler);

export default app;
