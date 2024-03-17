import fs from "node:fs";

import { appDataFolderPath } from "../app";
import AppServerType from "../types/server/AppServerType";

// Any of my repositories that opens up a server
export type ServerName = "good-roots" | "good-roots-pug-view" |
    "general-frontend" | "express-authentication" | "express-real-estate";

/**
 * app_server.json file abstraction
 */
export default class AppServer {
    constructor() {
        
    }
    
    /**
     * Folder path
     * 
     * @returns 
     */
    #folderPath() {
        const filePath = appDataFolderPath();
        return `${filePath}/config`
    }
    
    /**
     * Get file path
     */
    filePath(): string {
        const folderPath = this.#folderPath();
        return `${folderPath}/app_server.json`;
    }
    
    /**
     * Create folder
     */
    createFolder() {
        try {
            fs.mkdirSync(this.#folderPath());
        } catch(err) {
            // Folder exists
        }
    }
    
    // --- Operations ---
    /**
     * Insert or update a server
     */
    upsertServer(serverName: ServerName, serverLocation: string) {
        try {
            const fileData = fs.readFileSync(this.filePath(), 'utf-8');
            const servers: AppServerType = JSON.parse(fileData);
            
            // Update server
            servers[serverName] = serverLocation;
            
            fs.writeFileSync(this.filePath(), JSON.stringify(servers));
        } catch(err) {
            // Case of failing we have to create the file altogether
            const servers: AppServerType = { };
            
            // Insert server
            servers[serverName] = serverLocation;
            
            fs.writeFileSync(this.filePath(), JSON.stringify(servers));
        }
    }
    
    /**
     * Get file data
     */
    servers(): AppServerType {
        const fileData = fs.readFileSync(this.filePath(), 'utf-8');
        const servers: AppServerType = JSON.parse(fileData);
        return servers;
    }
}
