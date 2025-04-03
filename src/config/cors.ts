/** @format */

import { CorsOptions } from 'cors';

// Allowed origins
const whitelist = ['http://localhost:8080'];

// Defining CORS options
export const corsOptions: CorsOptions = {
	origin: (origin, callback) => {
		if (!origin || whitelist.includes(origin)) {
			// eslint-disable-next-line unicorn/no-null
			callback(null, true);
		} else {
			callback(new Error(`Origin '${origin}' not allowed by CORS`));
		}
	},
	credentials: true, // Allow credentials
	optionsSuccessStatus: 200, // Success status for preflight
};
