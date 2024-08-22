/**
 * Check if it's development
 */
export function isDevelopment() {
	return !process.env.NODE_ENV || process.env.NODE_ENV === 'development';
}

/**
 * Server port
 */
export function serverPort(defaultPorts: {
	development: 3000,
	production: 8080
}) {
	return process.env.PORT || (!isDevelopment() && defaultPorts.production) || defaultPorts.development;
}

/**
 * Check if server is running on production mode
 */
export function isProduction() {
	return process.env.NODE_ENV === 'production';
}

/**
 * Get frontend url
 */
export function frontendUrl() {
    return process.env.FRONTEND_URL;
}

/**
 * Returns the server port based on the environment variables and default values.
 *
 * @remarks
 * The function checks the `process.env.PORT` environment variable first. If it's not set,
 * it then checks if the application is running in development mode using the `isDevelopment()` function.
 * If it's not in development mode, it defaults to port 8080. If it's in development mode, it falls back to port 3000.
 *
 * @returns The server port number.
 */
export function apiPort() {
	return process.env.PORT || (!isDevelopment() && 8080) || 3000;
}

/**
 * Api url
 * 
 * Mainly for frontend sites
 */
export function apiUrl() {
	const port = apiPort();
	const host = process.env.API_HOST || 'localhost';
	const domain = process.env.API_DOMAIN;
	const path = process.env.API_PATH || "";
	
	if(domain) {
		return `https://${domain}${path}`;
	}
	
	return `http://${host}:${port}${path}`;
}
