export const EXPRESS_AUTHENTICATION_KEYWORD = "EXPRESS_AUTHENTICATION_URL";
export const BACKDOOR_SERVER_ACCESS_KEYWORD = "BACKDOOR_SERVER_ACCESS_URL";
export const REAL_ESTATE_KEYWORD = "REAL_ESTATE_URL";

// Generalization mapping
/**
 * Get express authentication url
 */
export function expressAuthenticationUrl() {
    return process.env[EXPRESS_AUTHENTICATION_KEYWORD];
}

/**
 * Get backdoor server access key url
 */
export function backdoorServerAccessUrl() {
    return process.env[BACKDOOR_SERVER_ACCESS_KEYWORD];
}

/**
 * Real estate url
 */
export function realEstateUrl() {
    return process.env[REAL_ESTATE_KEYWORD];
}

export default {
    EXPRESS_AUTHENTICATION_KEYWORD,
    BACKDOOR_SERVER_ACCESS_KEYWORD,
    REAL_ESTATE_KEYWORD,
    expressAuthenticationUrl,
    backdoorServerAccessUrl,
    realEstateUrl,
}
