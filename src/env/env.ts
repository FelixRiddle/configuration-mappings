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
