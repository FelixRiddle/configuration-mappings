import fs from "node:fs";
import os from 'node:os';

/**
 * Linux priority path
 */
export function linuxPriorityPath() {
    const appName = "good-roots";
    
    // Check if www exists
    try {
        fs.accessSync("/srv/www");
        
        // Create folder
        const appDirectory = `/srv/www/${appName}`;
        // Try to create it if it doesn't exists
        try {
            fs.mkdirSync(appDirectory);
        } catch(err: unknown) {
            if(err instanceof Error) {
                // The folder already exists
                console.error(err);
                
                // Cast to the good one
                const error = <NodeJS.ErrnoException>err;
                if(error.code === 'EACCES') {
                    // The user doesn't have access to it
                    // Use home directory instead
                    throw Error("Couldn't access /srv/www");
                }
            }
        }
        
        return appDirectory;
    } catch(err) {
        // Not even gonna bother trying to fix the error
    }
    
    // Fallback into home dir
    const userHomeDir = os.homedir();
    return `${userHomeDir}/.local/share/${appName}`;
}

/**
 * App data folder
 */
export function appDataFolderPath() {
    const userOs = os.platform();
    // console.log(`User os: `, userOs);
    
    // Check user system
    if(userOs === "linux") {
        return linuxPriorityPath();
    } else {
        throw Error("Can't get the app folder path for your operating system, not implemented.");
    }
}

/**
 * Create app data folder
 */
export function createAppDataFolder() {
    try {
        fs.mkdirSync(appDataFolderPath(), { recursive: true });
    } catch(err) {
        // The folder exists
    }
}
