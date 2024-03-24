import { GlobalFolderOptions } from "./PublicFolder";

/**
 * 
 * basePath:
 * Callback that calculates the path
 * folderName:
 * The folder name
 */
export interface FolderPathOptions {
    basePath: () => string,
    
}

/**
 * Determine folder path
 */
export default function determineFolderPath(options: FolderPathOptions, globalOptions: GlobalFolderOptions = {
    systemPath: true,
    folder: undefined,
    folderName: "public",
}) {
    // Determine the folder to start from
    const folderName = globalOptions.folderName;
    let folderPath = "";
    if(!globalOptions.folder) {
        if(globalOptions.systemPath) {
            folderPath = `${options.basePath()}/${folderName}`;
        } else {
            folderPath = `${folderName}`;
        }
    } else {
        folderPath = `${globalOptions.folder}/${folderName}`;
    }
    
    return folderPath;
}


