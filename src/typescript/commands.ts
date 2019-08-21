#!/usr/bin/env node

const program = require('commander');
import { MyMath } from './mymath';

program
    .version('0.0.1');

program
    .command('add <numbers...>')
    .alias('sum')
    .description('Add multiple numbers and return result')
    .action((numbers) => {
        console.log(MyMath.sum.apply(this, numbers))
    });

program.parse(process.argv);