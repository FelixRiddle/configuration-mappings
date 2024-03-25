import SERVER_URL_MAPPINGS from "./env/SERVER_URL_MAPPINGS";
import SERVERS_DEFAULT_LOCATION from "./env/SERVERS_DEFAULT_LOCATION";

import serversEnv, {
    expressAuthenticationUrl,
    backdoorServerAccessUrl,
    realEstateUrl,
} from "./env/serversEnv";
import { appDataFolderPath } from "./app/index";

import PublicFolder from "./public/PublicFolder";
import UserFolder from "./public/user/UserFolder";
import PropertyFolder from "./public/user/property/PropertyFolder";

export {
    SERVERS_DEFAULT_LOCATION,
    SERVER_URL_MAPPINGS,
    
    serversEnv,
    expressAuthenticationUrl,
    backdoorServerAccessUrl,
    realEstateUrl,
    
    appDataFolderPath,
    
    PublicFolder,
    UserFolder,
    PropertyFolder,
};
