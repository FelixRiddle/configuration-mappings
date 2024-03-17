import { ArgumentParser } from "argparse";

import executeTests from "./test";
import { createAppDataFolder } from "../app";
import AppServer from "../server/AppServer";

const parser = new ArgumentParser({
    description: "Argparse example"
});

parser.add_argument("--test", {
    help: "Execute tests",
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
    
    // // Test
    // appServer.upsertServer("express-authentication", "http://localhost:38001");
    // const data = appServer.servers();
    
    await executeTests(args);
    
    // process.exit(0);
};

executeCommands();
