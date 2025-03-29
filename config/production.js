import 'dotenv/config';

export default {
	env: process.env.NODE_ENV || 'production',
	host: process.env.HOST ?? '0.0.0.0',
	port: Number(process.env.PORT) || 3000,
};
