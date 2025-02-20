// Importing allowed origins list
import whitelist from './allowed-origins';

// Defining CORS options
const corsOptions = {
	origin: (origin, callback) => {
		if (whitelist.indexOf(origin) !== -1 || !origin) {
			callback(null, true);
		} else {
			callback(new Error(`Origin '${origin}' not allowed by CORS`));
		}
	},
	credentials: true, // Allow credentials
	optionsSuccessStatus: 200, // Success status for preflight options requests
};

// Exporting CORS options
export default corsOptions;
