# Table of Contents

- [About](#About)
- [How to install](#How-to-install)
- [Documentation](#Documentation)
- [Development](#Development)

# About

This project is a simple open source command line application introducing
a command called "math" allowing you to perform useful calculations directly
from your console.

This project is not a real serious project as it's used mainly as a show case
and learning tool for the following technologies:

- ![Commander](https://github.com/tj/commander.js/) a tool for creating command line interfaces
- ![Node](https://nodejs.org/en/) a JavaScript runtime environment
- ![TypeScript](https://www.typescriptlang.org/) a JavaScript super set making it type sensitive
- ![Jest](https://www.typescriptlang.org/) a JavaScript and TypeScript Testing Framework

The project also uses interesting command line tools like:

- ![Chalk](https://github.com/chalk/chalk) Colored and styled console output

If you have interesting ideas or want to try developing yourself feel free to contribute :)

# How to install

    npm install -g https://github.com/JanSchneider1/Calculator-for-Command-Line
    
Install this package globally via NPM, remember to have ![Node.js](https://nodejs.org/en/)
installed.

    math --version
    
Now you are ready to use this package from every shell on your computer! 

# Documentation

- [add, sum](#add,-sum)
- [greatest-common-divisor, gcd](#greatest-common-divisor,-gdc)

## sum, add

Calculates the sum of the given numbers

    math add/sum <numbers...>
    
    <numbers...> := (1 or more) Not negative numbers,
     that can be zero or point numbers, seperated with a space
    
Examples:
    
    math add 1 2 3
    // result = 6
    
    math add 0.5 1 1.5 0.5
    // result = 3.5

## greatest-common-divisor, gcd

Finds the greatest common divisor for `a` and `b`

    math greatest-common-divisor/gcd <a> <b>
    
    <a>:= Not zero or negative Integer Number
    <b>:= Not zero or negative Integer Number

Options:
    
    --visualize/-v -> Outputs calculation to console
    
Examples:
    
    math gcd 120 5
    // result = 5
    
    math gcd 16 4
    // result = 4
    
    math gcd 34 20 --visualize
    /* outputs:
    34 % 20 = 14
      /    /
    20 % 14 = 6
      /    /
    14 % 6 = 2
      /    /
    6 % 2 = 0
    Result => 2
    */
    
# Development

## Setup

First you have to link the package to your global package

    npm link
    
Create a watcher to watch over your written Typescript. The compiled JavaScript
can be found in ./build/js . You have to run following command:

    tsc --watch

## Testing

You can find the test in the "/test" directory

To run the tests simply use

    npm run test
    
if you want to get the coverage of the tests run

    jest --coverage