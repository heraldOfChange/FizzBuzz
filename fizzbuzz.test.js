'use strict';

describe('class FizzBuzz', () => {
    describe('specification tests', () => {
        const testScenarios = [1, 3, 5, 6, 9, 12, 15, 30, 40, 50];

        it('says Fizz 6 times', () => {
            const fooObj = require('./fizzbuzz')();

            const actual = testScenarios
                .map(number => fooObj.isDivisibleBy3(number))
                .filter(result => result === true);

            expect(actual.length).toBe(6);
        });

        it('says Buzz 5 times', () => {
            const fooObj = require('./fizzbuzz')();

            const actual = testScenarios
                .map(number => fooObj.isDivisibleBy5(number))
                .filter(result => result === true);

            expect(actual.length).toBe(5);
        });
    });
});