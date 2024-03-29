import { EXPRESS_AUTHENTICATION_KEYWORD, BACKDOOR_SERVER_ACCESS_KEYWORD, REAL_ESTATE_KEYWORD } from "./serversEnv";

import SERVERS_DEFAULT_LOCATION from "./SERVERS_DEFAULT_LOCATION";

const GOOD_ROOTS_URL = process.env.GOOD_ROOTS_URL;
const AUTHENTICATION_URL = process.env.AUTHENTICATION_URL;
const BACKDOOR_SERVER_ACCESS_URL = process.env.BACKDOOR_SERVER_ACCESS_URL;
const REAL_ESTATE_URL = process.env.REAL_ESTATE_URL;

/**
 * Set servers url as environment variables
 * 
 * Should be called at the start of every project that makes use of them
 */
export function setDefaultLocationEnvironmentVariables() {
    process.env["GOOD_ROOTS_URL"] = SERVERS_DEFAULT_LOCATION["good-roots"];
    process.env[EXPRESS_AUTHENTICATION_KEYWORD] = SERVERS_DEFAULT_LOCATION["express-authentication"];
    process.env[BACKDOOR_SERVER_ACCESS_KEYWORD] = SERVERS_DEFAULT_LOCATION["backdoor-server-access"];
    process.env[REAL_ESTATE_KEYWORD] = SERVERS_DEFAULT_LOCATION["express-real-estate"];
}

/**
 * Server default urls
 * 
 * Because of a tiny trouble I have, these will be used as default but not the source of truth
 */
const SERVER_URL_MAPPINGS = {
    // Frontends
    GOOD_ROOTS: GOOD_ROOTS_URL ?? SERVERS_DEFAULT_LOCATION["good-roots"],
    GOOD_ROOTS_NEXTJS_VIEW: "http://localhost:3001",
    GENERAL_FRONTEND: "http://localhost:3003",
    
    // Backends
    AUTHENTICATION: AUTHENTICATION_URL ?? SERVERS_DEFAULT_LOCATION["express-authentication"],
    BACKDOOR_SERVER_ACCESS: BACKDOOR_SERVER_ACCESS_URL ?? SERVERS_DEFAULT_LOCATION["backdoor-server-access"],
    REAL_ESTATE: REAL_ESTATE_URL ?? SERVERS_DEFAULT_LOCATION["express-real-estate"]
};

export default SERVER_URL_MAPPINGS;
