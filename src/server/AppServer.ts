import fs from "node:fs";

import { appDataFolderPath } from "../app";

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
}
