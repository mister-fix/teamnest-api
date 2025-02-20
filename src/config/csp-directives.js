const cspOptions = {
	contentSecurityPolicy: {
		directives: {
			'default-src': ["'self'"],
			'style-src-elem': ["'self'", 'https://fonts.googleapis.com'],
		},
	},
};

export default cspOptions;
