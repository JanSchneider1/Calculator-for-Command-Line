import { throwError } from "./errorhandling";

export class Calculator{
    static sum(...numbers){
        if (numbers.length == 0){
            throwError("no arguments given");
        }
        return numbers.reduce((total, number) => total + number, 0);
    }

    static greatestCommonDivisor(a: number, b: number, visualize: boolean = false){
        if (a == 0 || b == 0){
            throwError(`a = ${a} or b = ${b} cannot be is zero`);
        }
        if (a < 0 || b < 0){
            throwError(`a = ${a} or b = ${b} cannot be negative`);
        }
        if (a % 1 != 0 || b % 1 != 0){
            throwError(`a = ${a} or b = ${b} cannot be point numbers`);
        }
        if (b > a){
            return Calculator.greatestCommonDivisor(b, a, visualize);
        }
        let numberToDivide = a;
        let divisor = b;
        let rest = numberToDivide % divisor;
        if (visualize) console.log(`${numberToDivide} % ${divisor} = ${rest}`);
        // When rest is zero, the last divisor divides both numbers
        while(rest != 0) {
            numberToDivide = divisor;
            divisor = rest;
            rest = numberToDivide % divisor;
            if (visualize) console.log(`  /    /`);
            if (visualize) console.log(`${numberToDivide} % ${divisor} = ${rest}`);
        }
        return divisor;
    }
}