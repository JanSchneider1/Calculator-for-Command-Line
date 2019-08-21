export class MyMath{
    static sum(...numbers){
        if (numbers.length === 0){
            throw new Error("No arguments given");
        }
        const sum = numbers.reduce(MyMath.getSum, 0);
        return sum;
    }

    static getSum(total, num) {
        //console.log(total);
        //console.log(num);
        return total + Math.round(num);
    }
}