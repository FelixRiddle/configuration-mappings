import { ArgumentParser } from "argparse";

import { createAppDataFolder } from "../app";
import AppServer from "../server/AppServer";

import executeTests from "./test";
import executePrintCommands from "./print";

const parser = new ArgumentParser({
    description: "Argparse example"
});

parser.add_argument("--test", {
    help: "Execute tests",
    action: "store_true"
});

parser.add_argument("--print-app-directory", {
    help: "Print app directory using the priority",
    action: "store_true"
});

/**
 * Execute commands
 */
export default async function executeCommands() {
    const args = parser.parse_args();
    
    // Create folders
    createAppDataFolder();
    const appServer = new AppServer();
    appServer.createFolder();
    
    await executeTests(args);
    executePrintCommands(args);
    
    // process.exit(0);
};

executeCommands();
