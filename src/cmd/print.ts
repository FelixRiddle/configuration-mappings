import { appDataFolderPath } from "../app/index";

/**
 * Execute print commands
 */
export default function executePrintCommands(args: any) {
    if(args.print_app_directory) {
        console.log(`App directory: `, appDataFolderPath());
    }
}
