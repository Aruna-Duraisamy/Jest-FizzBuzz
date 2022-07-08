/* FizzBuzz:
 * Given a number
 * Print 'Fizz' for multiples for 3  
 * Print 'Buzz' for multiples for 5
 * Print 'FizzBuzz' for multiples of 3 and 5
 * Otherwise, Print the number
*/
module.exports = (num) => {
    if (num % 15 === 0) return 'FizzBuzz';
    if (num % 3 === 0) return 'Fizz';
    if (num % 5 === 0) return 'Buzz';
    else return `${num}`;
};