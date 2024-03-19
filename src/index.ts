import SERVER_URL_MAPPINGS, { SERVERS_DEFAULT_LOCATION } from "./env/SERVER_URL_MAPPINGS"

import { expressAuthenticationUrl, backdoorServerAccessUrl, realEstateUrl } from "./server";
import LocationSelection from "./server/LocationSelection";
import AppServer from "./server/AppServer";
import serverConfigurationRouter from "./routes";

export {
    SERVERS_DEFAULT_LOCATION,
    SERVER_URL_MAPPINGS,
    
    serverConfigurationRouter,
    
    AppServer,
    LocationSelection,
    
    expressAuthenticationUrl,
    backdoorServerAccessUrl,
    realEstateUrl,
};
