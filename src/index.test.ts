import { testServerExists } from "./server/AppServer.test";

/**
 * Test all
 */
export default async function testAll() {
    console.log(`Running all tests`);
    
    testServerExists();
}
