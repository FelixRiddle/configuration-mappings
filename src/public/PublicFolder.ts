import fs from "node:fs";

import { appDataFolderPath } from "../app/index";
import UserFolder from './user/UserFolder';
import determineFolderPath from "./determineFolderPath";

export interface GlobalFolderOptions {
    systemPath: boolean
    folder?: string,
    folderName: string,
}

/**
 * Abstraction of the public folder
 * 
 * systemPath:
 * If false the path will start from 'public/'
 * Otherwise it will be start on the app folder '${APP_FOLDER}/public/'
 * 
 * folder:
 * If the folder path to start from is already known, pass this one
 * 
 * folderName:
 * The public folder name.
 */
export default class PublicFolder {
    folderPath: string;
    
    constructor(globalOptions: GlobalFolderOptions = {
        systemPath: true,
        folder: undefined,
        folderName: "public",
    }) {
        // Determine the folder to start from
        this.folderPath = determineFolderPath({ basePath: appDataFolderPath}, globalOptions);
    }
    
    // --- Operations ---
    /**
     * Create folder
     * 
     * Gets the job done regardless of errors
     * 
     * Creates:
     * /public
     *      /user
     */
    create() {
        try {
            fs.mkdirSync("public", { recursive: true });
        } catch(err) {
        }
        
        try {
            fs.mkdirSync(`${this.folderPath}/user`, { recursive: true, });
        } catch(err) {
        }
        
        return this;
    }
    
    /**
     * Delete user folder
     */
    delete() {
        try {
            fs.rmSync(this.folderPath, { recursive: true, force: true });
        } catch(err) {
            // Directory may not exist
        }
        
        return this;
    }
    
    /**
     * Public system folder
     */
    static path() {
        return new PublicFolder().folderPath;
    }
    
    // --- Conversions ---
    /**
     * Get user folder
     * 
     * @param userId 
     * @returns 
     */
    toUserFolder(userId: string) {
        return new UserFolder(userId);
    }
}
