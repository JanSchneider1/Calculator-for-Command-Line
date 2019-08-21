export class Calculator{
    static sum(...numbers){
        if (numbers.length === 0){
            throw new Error("No arguments given");
        }
        return numbers.reduce((total, num) => {return total + Math.round(num);}, 0);
    }

    static greatestCommonDivisor(a: number, b: number){
        if (a == 0 || b == 0){
            throw new Error(`a = ${a} or b = ${b} cannot be is zero`);
        }
        if (a < 0 || b < 0){
            throw new Error(`a = ${a} or b = ${b} cannot be negative`);
        }
        if (a % 1 != 0 || b % 1 != 0){
            throw new Error(`a = ${a} or b = ${b} cannot be point numbers`);
        }
        if (b > a){
            Calculator.greatestCommonDivisor(b, a);
        }
        let numberToDivide = a;
        let divisor = b;
        let rest = numberToDivide % divisor;
        // When rest is zero, the last divisor divides both numbers
        while(rest != 0) {
            numberToDivide = divisor;
            divisor = rest;
            rest = numberToDivide % divisor;
        }
        return divisor;
    }
}