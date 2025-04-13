/**
 * API Content security policy and security headers Evaluated:
 * https://csp-evaluator.withgoogle.com/
 *
 * @format
 */

import config from 'config';

/** @format */

// Check environment
const isDev = config.get('env') === 'development';

// CSP Directives
const cspDirectives = {
	directives: {
		defaultSrc: ["'self'"],
		styleSrc: ["'self'", 'https://fonts.googleapis.com'],
		imgSrc: ["'self'", 'data:', 'https://your-image-cdn.com'],
		fontSrc: ["'self'", 'https://fonts.gstatic.com'],
		scriptSrc:
			isDev ? ["'self'", "'unsafe-inline'", "'unsafe-eval'"] : ["'self'"],
		connectSrc:
			isDev ?
				["'self'", 'http://localhost:8080']
			:	["'self'", 'https://teamnest.vercel.app'],
		frameSrc: ["'none'"],
		frameAncestors: ["'none'"],
		formAction: ["'self'", 'https://your-api.com'],
		baseUri: ["'self'"],
		objectSrc: ["'none'"],
		upgradeInsecureRequests: true,
		blockAllMixedContent: true,
		requireTrustedTypesFor: 'script',
		reportUri:
			isDev ?
				'/csp-violation-report'
			:	'https://your-api.com/csp-violation-report',
	},
	reportOnly: isDev, // Enable report-only mode in development
};

// Transport policy
const transportPolicy = {
	maxAge: 63072000, // Enforce HTTPS for 2 years
	includeSubDomains: true, // Apply to subdomains
	preload: true, // Allow preloading in browsers
};

// Additional headers
const securityHeaders = {
	referrerPolicy: { policy: 'no-referrer' }, // Prevent referrer leakage
	noSniff: true, // Prevent MIME type sniffing
	xssFilter: true, // Enable XSS protection
	frameguard: { action: 'deny' }, // Prevent framing
	xPoweredBy: false, // Ignore X-Powered-By header
};

// Define the reporting endpoint
export const reportConfig = {
	group: 'csp-violations',
	max_age: 10886400, // 126 days
	endpoints: [{ url: 'https://your-api.com/csp-violation-report' }],
};

// Combine policies and security headers
export const helmetConfig = {
	contentSecurityPolicy: cspDirectives, // CSP configuration
	hsts: transportPolicy, // Transport policy (HSTS)
	referrerPolicy: securityHeaders.referrerPolicy, // Referrer policy
	frameguard: securityHeaders.frameguard, // Frameguard
	hidePoweredBy: securityHeaders.xPoweredBy, // Hide X-Powered-By
};
