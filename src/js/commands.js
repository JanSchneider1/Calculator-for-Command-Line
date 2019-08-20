#!/usr/bin/env node

const program = require('commander');
const { MyMath } = require('./mymath');

program
    .command('add <numbers...>')
    .alias('sum')
    .description('Add multiple numbers and return result')
    .action((numbers) => {
        console.log(MyMath.sum(numbers))
    });

program.parse(process.argv);