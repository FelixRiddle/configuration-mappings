import os from "node:os";
import osName from "os-name";

/**
 * App data folder
 */
export function appDataFolderPath() {
    const userOs = osName();
    
    // Check user system
    if(userOs.startsWith("Linux")) {
        
    } else {
        throw Error("Can't get the app folder path for your operating system, not implemented.");
    }
}
