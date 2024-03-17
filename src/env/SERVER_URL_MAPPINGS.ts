const GOOD_ROOTS_URL = process.env.GOOD_ROOTS_URL;
const AUTHENTICATION_URL = process.env.AUTHENTICATION_URL;
const BACKDOOR_SERVER_ACCESS_URL = process.env.BACKDOOR_SERVER_ACCESS_URL;
const REAL_ESTATE_URL = process.env.REAL_ESTATE_URL;

/**
 * Server default urls
 * 
 * Because of a tiny trouble I have, these will be used as default but not the source of truth
 */
const SERVER_URL_MAPPINGS = {
    // Frontends
    GOOD_ROOTS: GOOD_ROOTS_URL ? GOOD_ROOTS_URL : "http://localhost:3000",
    GOOD_ROOTS_NEXTJS_VIEW: "http://localhost:3001",
    GENERAL_FRONTEND: "http://localhost:3003",
    
    // Backends
    AUTHENTICATION: AUTHENTICATION_URL ? AUTHENTICATION_URL : "http://localhost:38001",
    BACKDOOR_SERVER_ACCESS: BACKDOOR_SERVER_ACCESS_URL ? BACKDOOR_SERVER_ACCESS_URL : "http://localhost:38002",
    REAL_ESTATE: REAL_ESTATE_URL ? REAL_ESTATE_URL : "http://localhost:38003"
};

export default SERVER_URL_MAPPINGS;
