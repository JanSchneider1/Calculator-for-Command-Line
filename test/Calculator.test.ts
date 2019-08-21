import { Calculator } from '../src/typescript/Calculator';

process.env.mode = "development";

describe('Test sum function',() => {
    test('Throw error when arguments are empty', () => {
        expect(() => { Calculator.sum() })
            .toThrow("no arguments given");
    });
    test.each`
    numbers                 | expectedResult
    ${[1, 2, 3]}            ${6}
    ${[10, 20, 3, 7, 30]}   ${70}
    ${[0, 0, 0]}            ${0}
    ${[-1, -10, 10, 1]}     ${0}
    ${[-1, -10, -100, -2]}  ${-113}
    ${[-1, -0.5]}           ${-1.5}
    ${[2.5, 1.5, 0.5]}      ${4.5}
    ${[10, 0.5, 1.5, 0.5]}  ${12.5}
    ${[10, 0.5, 1.5]}       ${12}
    `('The sum of following numbers: $numbers is $expectedResult', ({ numbers, expectedResult }) => {
        expect(Calculator.sum.apply(this, numbers)).toBe(expectedResult);
    });
});

describe('Test greatest common divisor function',() => {
    test('Throw error when a = 2.5 as point numbers are not supported', () => {
        expect(() => { Calculator.greatestCommonDivisor(2.5, 10) })
            .toThrow(`a = ${2.5} or b = ${10} cannot be point numbers`);
    });
    test('Throw error when b = 2.5 as point numbers are not supported', () => {
        expect(() => { Calculator.greatestCommonDivisor(10, 2.5) })
            .toThrow(`a = ${10} or b = ${2.5} cannot be point numbers`);
    });
    test('Throw error when a = 0 as 0 is not a valid input', () => {
        expect(() => { Calculator.greatestCommonDivisor(0, 10) })
            .toThrow(`a = ${0} or b = ${10} cannot be is zero`);
    });
    test('Throw error when b = 0 as 0 is not a valid input', () => {
        expect(() => { Calculator.greatestCommonDivisor(10, 0) })
            .toThrow(`a = ${10} or b = ${0} cannot be is zero`);
    });
    test('Throw error when a = -1 as negative numbers are not allowed', () => {
        expect(() => { Calculator.greatestCommonDivisor(-1, 10) })
            .toThrow(`a = ${-1} or b = ${10} cannot be negative`);
    });
    test('Throw error when b = -1 as negative numbers are not allowed', () => {
        expect(() => { Calculator.greatestCommonDivisor(10, -1) })
            .toThrow(`a = ${10} or b = ${-1} cannot be negative`);
    });
    test.each`
    a       | b      | expectedResult
    ${3}    ${3}     ${3}
    ${1}    ${1}     ${1}
    ${12}   ${2}     ${2}
    ${2}    ${12}    ${2}
    ${16}   ${4}     ${4}
    ${13}   ${12}    ${1}
    ${120}  ${35}    ${5}
    ${35}   ${120}   ${5}
    `('Greatest common divisor of a = $a and b = $b is $expectedResult', ({ a, b, expectedResult}) => {
        expect(Calculator.greatestCommonDivisor(a, b)).toBe(expectedResult);
    });
});