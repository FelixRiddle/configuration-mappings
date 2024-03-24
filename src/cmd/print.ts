import { appDataFolderPath } from "../app/index";

import PropertyFolder from "../public/user/property/PropertyFolder";

/**
 * Execute print commands
 */
export default function executePrintCommands(args: any) {
    if(args.print_app_directory) {
        console.log(`App directory: `, appDataFolderPath());
    }
    
    if(args.print_property_folder) {
        console.log(`Property folder(Random ids): `, PropertyFolder.path("1", "2"));
    }
}
