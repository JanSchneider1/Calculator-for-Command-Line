#!/usr/bin/env node

const program = require('commander');
import { Calculator } from './Calculator';

// Set to 'production' to disable error message
process.env.mode = "production";

program
    .version('0.0.1');

program
    .command('add <numbers...>')
    .alias('sum')
    .description('Add multiple numbers and return result')
    .action((numbers) => {
        // Parse arguments to numbers
        numbers = numbers.map(Number);
        console.log(Calculator.sum.apply(this, numbers))
    });

program
    .command('gcd <a> <b>')
    .option('-v, --visualize', "Visualize calculation in console")
    .alias('greatest-common-divisor')
    .description('Finds the greatest common divisor for a and b')
    .action((a, b, cmdObj) => {
        console.log(Calculator.greatestCommonDivisor(a, b, cmdObj.visualize))
    });

program.parse(process.argv);