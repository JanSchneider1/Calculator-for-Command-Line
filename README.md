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

If you have interesting ideas or want to try developing you self feel free to contribute :)

# How to install

    npm install -g https://github.com/JanSchneider1/Calculator-for-Command-Line
    
Install this package globally via NPM, remember to have ![Node.js](https://nodejs.org/en/)
installed.

    math --version
    
Now you are ready to use this package from every shell on your computer! 

# Documentation

- [sum, add](#sum,-add)
Sum up numbers

### sum, add

    math sum 1 2 3
    = 6
    
Sums up different numbers

# Development

## Testing

You can find the test in the "/test" directory

To run the tests simply use

    jest
    
or use

    npm run test
    
if you want to get the coverage of the tests run

    jest --coverage