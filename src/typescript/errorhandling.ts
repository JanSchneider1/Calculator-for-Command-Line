/* We want to throw an error while we are testing the application.
 * But we don't want to throw an error when we are using the application
 * from console instead we won't just a quick message.
 *
 * Set process.env.mode to 'development' in "./test" files
 * Set process.env.mode to 'production' in "./src/typescript/commands.ts"
 */
const chalk = require('chalk');

export function throwError(message){
    if (process.env.mode == "development"){
        throw new Error(message);
    }
    else{
        console.log(chalk.red('(╯°□°)╯︵ Error: ' + message));
        process.exit();
    }
}