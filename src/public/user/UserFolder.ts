import PropertyFolder from "./property/PropertyFolder";

import PublicFolder, { GlobalFolderOptions } from "../PublicFolder";
import determineFolderPath from "../determineFolderPath";

/**
 * Abstraction of the user folder
 */
export default class UserFolder {
    userId: string;
    folderPath: string;
    
    constructor(userId: string, globalOptions: GlobalFolderOptions = {
        systemPath: true,
        folder: undefined,
        folderName: "user",
    }) {
        this.userId = userId;
        
        // Determine folder path
        this.folderPath = determineFolderPath(
            {
                basePath: PublicFolder.path
            }, {
                ...globalOptions,
                folderName: `user/${this.userId}`
            });
    }
    
    // --- Get folder paths ---
    /**
     * Relative user property folder
     * 
     * Gets the relative user property folder path from public folder
     * 
     */
    relativePropertyFolder() {
        return `${this.relativeFolder()}/property`;
    }
    
    /**
     * User property folder
     */
    static propertyFolder(userId: string) {
        return new UserFolder(userId).relativePropertyFolder();
    }
    
    /**
     * User folder
     */
    static path(userId: string) {
        return new UserFolder(userId).folderPath;
    }
    
    /**
     * Relative user folder
     * 
     * Gets the relative user folder from public folder
     * 
     */
    relativeFolder() {
        return `public/user/${this.userId}`;
    }
    
    // --- Conversions ---
    /**
     * To property folder
     * 
     * @param userId 
     * @returns 
     */
    toPropertyFolder(userId: string, propertyId: string) {
        return new PropertyFolder(userId, propertyId);
    }
}
