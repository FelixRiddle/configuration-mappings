import SERVER_URL_MAPPINGS from "./env/SERVER_URL_MAPPINGS"

import { expressAuthenticationUrl, backdoorServerAccessUrl, realEstateUrl } from "./server";
import LocationSelection from "./server/LocationSelection";
import AppServer from "./server/AppServer";
import serverConfigurationRouter from "./routes";

export default {
    SERVER_URL_MAPPINGS,
    
    serverConfigurationRouter,
    
    AppServer,
    LocationSelection,
    
    expressAuthenticationUrl,
    backdoorServerAccessUrl,
    realEstateUrl,
};
