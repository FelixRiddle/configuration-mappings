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
 * Api url
 * 
 * Mainly for frontend sites
 */
export function apiUrl() {
	const port = process.env.API_PORT || 3000;
	const host = process.env.API_HOST || 'localhost';
	const domain = process.env.API_DOMAIN;
	const path = process.env.API_PATH || "";
	
	if(domain) {
		return `https://${domain}${path}`;
	}
	
	return `http://${host}:${port}${path}`;
}
