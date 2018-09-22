'use strict';

const fooObj = require('./fizzbuzz')();

for (let iteration = 1; iteration <= 100; iteration++) {
    if (fooObj.isDivisibleBy3(iteration) && fooObj.isDivisibleBy5(iteration))
        console.log('FizzBuzz');
    else if (fooObj.isDivisibleBy5(iteration))
        console.log('Fizz');
    else if (fooObj.isDivisibleBy3(iteration))
        console.log('Buzz');
    else console.log(iteration);
}
