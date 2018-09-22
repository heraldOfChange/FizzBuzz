'use strict';

class FizzBuzz {
    isDivisibleBy3(number) {
        return number % 3 === 0;
    }

    isDivisibleBy5(number) {
        return number % 5 === 0;
    }
}

module.exports = () => new FizzBuzz();
