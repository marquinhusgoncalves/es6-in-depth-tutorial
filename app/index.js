import {fellowship, total} from './fellowship';
import {add, multiply} from './math';
import {Animal} from './Animal';

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

// Class

class Lion extends Animal {
  constructor(name, heigth, color) {
    super(name, heigth);
    this.color = color;
  }

  hello() {
    console.log(`Hi! I'm ${this.name} from Pride Rock`);
  }
};

let son = new Lion('Simba', 23, 'Gold');
console.log(son);
son.hello();

// Prototype

function Vehicle(make, year) {
  this.make = make;
  this.year = year;
}

Vehicle.prototype.color;

Vehicle.prototype.bio = () => {
    return `A ${this.color} ${this.make} made in ${this.year}.`;
};

let s = new Vehicle("Tesla", 2017);
s.color = "black";

console.log(s.bio());