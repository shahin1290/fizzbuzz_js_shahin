function FizzBuzz() {
    this.check = (number) => {

        const isDivisibleBy = (divisor) => number % divisor === 0;

        if (isDivisibleBy(15)) {
            return 'FizzBuzz';
        } else if (isDivisibleBy(5)) {
            return 'Buzz';
        } else if (isDivisibleBy(3)) {
            return 'Fizz';
        } else {
            return number
        }
    }
}

