/** @format */

import 'dotenv/config';

import { readFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const pjson = JSON.parse(
	readFileSync(path.join(__dirname, '../package.json'), 'utf8')
);

export default {
	env: process.env.NODE_ENV || 'development',
	protocol: process.env.PROTOCOL ?? 'http',
	host: process.env.HOST ?? '0.0.0.0',
	port: process.env.PORT || 3000,
	name: pjson.name || 'Teamnest API',
	version: pjson.version,
};
