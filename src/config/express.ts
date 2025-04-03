/** @format */

import config from 'config';

import pjson from '@/package.json' with { type: 'json' };

export const expressSettings = {
	// Application Metadata
	name: 'Teamnest API',
	version: pjson.version,
	env: config.get<string>('env'),
	port: config.get<number>('port'),

	// Security
	'trust proxy': 1, // Trust first proxy
	'x-powered-by': false, // Remove X-Powered-By header
	etag: 'strong', // Use strong ETags

	// Request Handling
	'case sensitive routing': false,
	'strict routing': false,
	'query parser': 'simple', // Note: 'query parser' (not 'parsers')

	// Output Formatting
	'json spaces': 2, // Pretty-print JSON
};

export const expressMiddleware = {
	json: {
		limit: '1mb',
		type: 'application/json',
	},
	urlencoded: {
		extended: true,
		limit: '1mb',
	},
};
