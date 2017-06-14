import {fellowship, total} from './fellowship';
import {add, multiply} from './math';

console.log(fellowship, total);

console.log(add(2, 2));

console.log(multiply(3, 2));

let a = [20, 30, 40]; let b = [10, ...a, 50]; console.log(b);

// Map Method
let values = [20, 30, 40];

// FIrst step
// let double = (n) => {
//   return n * 2;
// };
// let doubled = values.map(double);

// Second step
// let double = (n) => n * 2;
// let doubled = values.map(double);

// Third step
let doubled = values.map((n) => n * 2);

console.log(doubled);

let points = [7, 16, 21, 4, 3, 22, 5];

// First
let highScores = points.filter((n) => n > 15);

console.log(highScores);

let phrase = 'wooh' + 'oo'.repeat(50);
console.log(phrase);

console.log('butterfly'.startsWith('butter')); //true

console.log('butterfly'.endsWith('fly')); // true

console.log('butterfly'.includes('tt')); //true

console.log('butterfly'.startsWith('flower')); //false

