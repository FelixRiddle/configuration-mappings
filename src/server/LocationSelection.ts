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
        
        process.env["AUTHENTICATION_URL"] = servers["express-authentication"];
        process.env["BACKDOOR_SERVER_ACCESS_URL"] = servers["backdoor-server-access"];
        process.env["REAL_ESTATE_URL"] = servers["express-real-estate"];
    }
}
