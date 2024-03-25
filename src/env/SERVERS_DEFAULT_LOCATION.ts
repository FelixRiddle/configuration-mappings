export interface SERVERS_LOCATION {
    'good-roots': string,
    'express-authentication': string,
    'backdoor-server-access': string,
    'express-real-estate': string,
}

const SERVERS_DEFAULT_LOCATION: SERVERS_LOCATION = {
    "good-roots": "http://localhost:3000",
    "express-authentication": "http://localhost:38001",
    "backdoor-server-access": "http://localhost:38002",
    "express-real-estate": "http://localhost:38003"
};

export default SERVERS_DEFAULT_LOCATION;
