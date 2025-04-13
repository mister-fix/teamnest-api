/** @format */

import config from 'config';

export const expressSettings = {
	env: config.get('env'),
	name: config.get('name'),
	version: config.get('version'),
	port: config.get('port'),

	// Security
	'trust proxy': 1,
	'x-powered-by': false,
	etag: 'strong',

	// Request handling
	'case sensitive routing': false,
	'strict routing': false,
	'show stack error': config.get('env') === 'development' ? true : false,
	'json escape': true,
	'json spaces': 2,
	'json replacer': undefined,
	'json limit': '100kb',
	'urlencoded extended': true,
	'urlencoded limit': '100kb',
	'urlencoded parameter limit': 1000,
	'query parser': 'simple',
};

export const expressMiddleware = {
	json: {
		limit: '100kb',
		type: 'application/json',
	},
	urlencoded: {
		extended: true,
		limit: '100kb',
		type: 'application/x-www-form-urlencoded',
	},
};
