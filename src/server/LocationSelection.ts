import { BACKDOOR_SERVER_ACCESS_KEYWORD, EXPRESS_AUTHENTICATION_KEYWORD, REAL_ESTATE_KEYWORD } from "./index";
import AppServerType from "../types/server/AppServerType";
import AppServer from "./AppServer";

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
}
