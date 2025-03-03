import compression from 'compression';
import cors from 'cors';
import express, { Express, Request, Response } from 'express';
import 'express-async-errors';
import { rateLimit } from 'express-rate-limit';
import helmet from 'helmet';
import morgan from 'morgan';

import corsOptions from '@/config/cors-options';
import cspDirectives from '@/config/csp-directives';
import morganFormat from '@/config/morgan-format';
import { errorHandler } from '@/middleware/error-handler';
import { unknownEndpoint } from '@/middleware/not-found';
import requestsLogger from '@/middleware/requests-logger';
import mainRouter from '@/routes/main-router';

const app: Express = express();

// Application settings
app.set('app name', 'Teamnest API'); // Setting the app name
app.set('api version', '0.1.0'); // Setting the API version
app.set('env', process.env.NODE_ENV || 'development'); // Set environment
app.set('trust proxy', 1); // Trust the first proxy
app.set('x-powered-by', false); // Disable X-Powered-By header
app.set('etag', 'strong'); // Use strong ETags for caching
app.set('json spaces', 2); // Set JSON response formatting
app.set('case sensitive routing', false); // Disable case-sensitive routing
app.set('strict routing', false); // Enable strict routing
app.set('query parsers', 'simple'); // Parse queries as key-value pairs

app.use(cors(corsOptions));
app.use(helmet(cspDirectives));
app.use(compression());
app.use(express.json({ limit: '1mb' }));
app.use(express.urlencoded({ limit: '1mb', extended: true }));

// Rate limiting
const limiter = rateLimit({
	windowMs: 15 * 60 * 1000, // 15 minutes
	max: 10, // Limit each IP to 10 requests per window
	standardHeaders: 'draft-8',
	legacyHeaders: false, // Disable the `X-RateLimit-*` headers
});
// Applying the rate limiting middleware to all requests
app.use(limiter);

// Enable morgan with custom format
app.use(morgan(morganFormat));

// Enable HTTP request logging
if (process.env.NODE_ENV !== 'production') {
	app.use(requestsLogger);
}

// Serve static files from the 'dist' directory
app.use(express.static('dist'));

// Redirect root URL requests to the main API endpoint
app.get('/', (req, res) => {
	res.redirect('/api');
});

// Ignore request for 'favicon'
app.get('/favicon.ico', (req: Request, res: Response) => {
	res.status(204).end();
});

// Main API endpoint
app.use('/api', mainRouter);

// 404 Not Found Middleware
app.use(unknownEndpoint);

// Error Handling Middleware
app.use(errorHandler);

export default app;
