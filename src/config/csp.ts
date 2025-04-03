/**
 * API Content security policy and security headers
 * Evaluated: https://csp-evaluator.withgoogle.com/
 *
 * @format
 */

// Check environment
const isDev = process.env.NODE_ENV === 'development';

// CSP Directives
const cspDirectives = {
	directives: {
		defaultSrc: ["'self'"], // Default policy for fetching resources
		styleSrc: ["'none'"], // Disallow CSS
		imgSrc: ["'none'"], // Disallow images
		fontSrc: ["'none'"], // Disallow fonts
		scriptSrc:
			isDev ?
				["'self'", "'unsafe-inline'", "'unsafe-eval'"] // Allow inline scripts and eval in development
			:	["'self'"], // Restrict to self in production
		connectSrc:
			isDev ?
				["'self'", 'http://localhost:8080'] // Allow localhost in development
			:	["'self'", 'https://teamnest.vercel.app'], // Allow production API endpoint
		frameSrc: ["'none'"], // Disallow embedding in frames
		frameAncestors: ["'none'"], // Disallow framing by other sites
		formAction: ["'none'"], // Disallow form submissions
		baseUri: ["'self'"], // Restrict base URLs to the same origin
		objectSrc: ["'none'"], // Disallow plugins like Flash
		upgradeInsecureRequests: [], // Upgrade HTTP requests to HTTPS
		blockAllMixedContent: [], // Block all mixed content
		requireTrustedTypesFor: 'script',
		// eslint-disable-next-line unicorn/no-null
		reportUri: isDev ? '/csp-violation-report' : null, // Report violations in development
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
	strictTransportSecurity: transportPolicy, // Transport policy
	securityHeaders, // Additional security headers
};
