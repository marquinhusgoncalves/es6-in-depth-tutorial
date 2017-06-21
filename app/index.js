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

Vehicle.prototype.bio = function() {
    return `A ${this.color} ${this.make} made in ${this.year}.`;
};

let s = new Vehicle("Tesla", 2017);
s.color = "black";

console.log(s);
console.log(s.bio());

// Data Structures in ES6
// Ser()

let ds = new Set();
ds.add(10);
ds.add(20);
ds.add('Woohoo');
ds.add({x: 'xis', h: 'aga'});

console.log(ds);
console.log(ds.size);
console.log(ds.has(5));

let numbers = [1, 5, 9, 40, 98];
let setNumber = new Set(numbers);
console.log(setNumber);

for (let element of setNumber.values()) {
  console.log(element);
};

let chars = 'kajsfghDsahGhjCdshjvCHDJSVcjhsvcxsD';
let chars_arr = chars.split('');
let newChars = new Set(chars_arr);
console.log(newChars);

// Maps

let exemploMap = new Map();
let key_1 = 'strig key';
let key_2 = {a: 'key'};
let key_3 = function() {};
exemploMap.set(key_1, 'return value for a string key');
exemploMap.set(key_2, 'return value for a string key');
exemploMap.set(key_3, 'return value for a string key');
console.log(exemploMap);

let numArr = [[1, 'one'], [2, 'two'], [3, 'three']];
let valMap = new Map(numArr);

for (let [key, value] of valMap.entries()) {
  console.log(`${key} points to ${value}`);
}

let string = 'vdvbasdhjvbavdfvadvfvh';

let letters = new Map();

for (let i = 0; i < string.length; i++) {
  let letter = string[i];
  if (!letters.has(letter)) {
    letters.set(letter, 1);
  } else {
    letters.set(letter, letters.get(letter) + 1);
  }
}

console.log(letters);