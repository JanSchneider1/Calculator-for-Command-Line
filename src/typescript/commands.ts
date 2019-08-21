#!/usr/bin/env node

const program = require('commander');
import { Calculator } from './Calculator';

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
    .alias('greatest-common-divisor')
    .description('Finds the greatest common divisor for a and b')
    .action((a, b) =>
        console.log(Calculator.greatestCommonDivisor(a, b))
    );

program.parse(process.argv);