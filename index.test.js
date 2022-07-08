const FizzBuzz = require('./index');

describe('fizzBuzz()', () => {
    it('returns Fizz for multiples of 3', () => {
        expect(FizzBuzz(3)).toBe('Fizz');
        expect(FizzBuzz(9)).toBe('Fizz');
    });

    it('return Buzz for multiples of 5', () => {
        expect(FizzBuzz(5)).toBe('Buzz');
        expect(FizzBuzz(10)).toBe('Buzz');
    });

    it('return FizzBuzz for mulitples of 3 and 5', () => {
        expect(FizzBuzz(15)).toBe('FizzBuzz');
        expect(FizzBuzz(30)).toBe('FizzBuzz');
    });

    it('Otherwise, return the number', () => {
        expect(FizzBuzz(2)).toBe('2');
        expect(FizzBuzz(19)).toBe('19');
    });
});