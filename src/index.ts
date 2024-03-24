import SERVER_URL_MAPPINGS, { SERVERS_DEFAULT_LOCATION, APP_NAME } from "./env/SERVER_URL_MAPPINGS"

import { expressAuthenticationUrl, backdoorServerAccessUrl, realEstateUrl } from "./server";
import LocationSelection from "./server/LocationSelection";
import AppServer from "./server/AppServer";
import serverConfigurationRouter from "./routes";
import { appDataFolderPath } from "./app/index";

export {
    APP_NAME,
    SERVERS_DEFAULT_LOCATION,
    SERVER_URL_MAPPINGS,
    
    serverConfigurationRouter,
    
    AppServer,
    LocationSelection,
    
    expressAuthenticationUrl,
    backdoorServerAccessUrl,
    realEstateUrl,
    
    appDataFolderPath,
};
