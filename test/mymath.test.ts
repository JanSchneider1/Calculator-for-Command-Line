import { Calculator } from '../src/typescript/calculator';

describe('Test sum function',() => {
    test('Calling sum function without any arguments should throw error', () => {
        expect(() => { Calculator.sum() }).toThrow();
    });
});

describe('Test greatest common divisor function',() => {
    test('Throw error when a = 0 as 0 is not a valid input', () => {
        expect(() => { Calculator.greatestCommonDivisor(0, 10) }).toThrow();
    });
    test('Throw error when b = 0 as 0 is not a valid input', () => {
        expect(() => { Calculator.greatestCommonDivisor(10, 0) }).toThrow();
    });
    test('Throw error when a = -1 as negative numbers are not allowed', () => {
        expect(() => { Calculator.greatestCommonDivisor(-1, 10) }).toThrow();
    });
    test('Throw error when b = -1 as negative numbers are not allowed', () => {
        expect(() => { Calculator.greatestCommonDivisor(10, -1) }).toThrow();
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