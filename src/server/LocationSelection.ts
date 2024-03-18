import { BACKDOOR_SERVER_ACCESS_KEYWORD, EXPRESS_AUTHENTICATION_KEYWORD, REAL_ESTATE_KEYWORD, backdoorServerAccessUrl, expressAuthenticationUrl, realEstateUrl } from "./index";
import AppServerType from "../types/server/AppServerType";
import AppServer from "./AppServer";
import { SERVERS_DEFAULT_LOCATION } from "../env/SERVER_URL_MAPPINGS";

/**
 * Location selection
 */
export default class LocationSelection {
    constructor() { }
    
    /**
     * Update location urls to those that are on the app server file
     */
    updateLocationUrls() {
        const appServer: AppServer = new AppServer();
        
        const servers: AppServerType = appServer.servers();
        
        process.env[EXPRESS_AUTHENTICATION_KEYWORD] = servers["express-authentication"];
        process.env[BACKDOOR_SERVER_ACCESS_KEYWORD] = servers["backdoor-server-access"];
        process.env[REAL_ESTATE_KEYWORD] = servers["express-real-estate"];
    }
    
    // --- Location selection ---
    /**
     * Express authentication or default
     */
    static expressAuthentication() {
        const url = expressAuthenticationUrl();
        if(!url) {
            return SERVERS_DEFAULT_LOCATION["express-authentication"];
        }
        
        return url;
    }
    
    /**
     * 
     */
    static backdoorServerAccess() {
        const url = backdoorServerAccessUrl();
        if(!url) {
            return SERVERS_DEFAULT_LOCATION["backdoor-server-access"];
        }
        
        return url;
    }
    
    /**
     * 
     */
    static realEstate() {
        const url = realEstateUrl();
        if(!url) {
            return SERVERS_DEFAULT_LOCATION["express-real-estate"];
        }
        
        return url;
    }
}
