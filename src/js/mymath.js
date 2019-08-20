class MyMath{
    static sum(...numbers){
        if (numbers.length === 0){
            throw new Error("No arguments given");
        }
        const sum = numbers.reduce((a,b) => parseFloat(a) + parseFloat(b), 0);
        return sum;
    }
}

module.exports = { MyMath };