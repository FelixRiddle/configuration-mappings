import fs from "node:fs";
import os from 'node:os';

/**
 * App data folder
 */
export function appDataFolderPath() {
    const userOs = os.platform();
    // console.log(`User os: `, userOs);
    
    // Check user system
    if(userOs === "linux") {
        const userHomeDir = os.homedir();
        const appFolder = `${userHomeDir}/.local/share/good-roots`;
        console.log(`User home directory: `, userHomeDir);
        // console.log(`App folder: `, appFolder);
        
        return appFolder;
    } else {
        throw Error("Can't get the app folder path for your operating system, not implemented.");
    }
}

/**
 * Create app data folder
 */
export function createAppDataFolder() {
    try {
        fs.mkdirSync(appDataFolderPath());
    } catch(err) {
        // The folder exists
    }
}
