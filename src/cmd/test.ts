import testAll from "../index.test";

/**
 * Execute test
 */
export default async function executeTests(args: any) {
    if(args.test) {
        await testAll();
    }
}
