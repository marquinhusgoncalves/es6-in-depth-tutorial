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

// Closures

let call = () => {
  let secret = 'ES6 Rocks';
  let reveal = () => {
    console.log(secret);
  }
  reveal();
}

call();

const addSuffix = (x) => {
  const concat = (y) => {
    return y + x;
  }
  return concat;
}

let add_ness = addSuffix("ness");
console.log(add_ness);
let h = add_ness("happi");
console.log(h);

let add_ful = addSuffix("full");
let f = add_ful("fruit");
console.log(f);

// Old
// const product = (x) => {
//   return y => {
//     return y * x;
//   }
// }

// Refactor
const product = x => y => y * x;

let mult5 = product(5);
let double = product(2);

console.log(mult5(2));
console.log(double(9));

const budget = () => {
  let balance = 0;
  let changeBal = (val) => {
    return balance += val;
  }

  const deposito20 = () => changeBal(20);
  const withdraw20 = () => changeBal(-20);
  const check = () => balance;

  // Old
  // return {
  //   deposito20: deposito20,
  //   withdraw20: withdraw20,
  //   check: check
  // }

  // Refactor
  return { deposito20, withdraw20, check }
}

let wallet = budget();
console.log(wallet);
wallet.deposito20();
wallet.withdraw20();
console.log(wallet.check());
console.log(wallet.balance);

// Generators

function* letterMaker() {
  yield 'a';
  yield 'b';
  yield 'c';  
}

let letterGen = letterMaker();
console.log(letterGen.next().value);
console.log(letterGen.next().value);
console.log(letterGen.next().value);
console.log(letterGen.next().value);

function* countMaker() {
  let count = 0;
  while (count < 3) {
    yield count += 1;
  }
}

let countGen = countMaker();
console.log(countGen.next().value);
console.log(countGen.next().value);
console.log(countGen.next().value);
console.log(countGen.next().value);

function* events() {
  let count = 0;
  while(true) {
    count += 2;
    let reset = yield count;
    if(reset) {
      count = 0;
    }
  }
}

let seuqence = events();
console.log(seuqence.next().value);
console.log(seuqence.next().value);
console.log(seuqence.next().value);
console.log(seuqence.next(true).value);
console.log(seuqence.next().value);

// Generators vs Iterators
//  const arrayIteraror = (array) => {
//   let index = 0;
//   return {
//     next: () => {
//       if(index < array.length) {
//         let next = array[index];
//         index += 1;
//         return next;
//       }
//     }
//   }
// }

// let it = arrayIteraror([1, 2, 3]);
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());

function* arrayIteraror() {
  yield arguments;
}

var it = arrayIteraror(1, 2, 3);
console.log(it.next().value);

// Promisses
// let p = new Promise((resolve, reject) => {
//   resolve('Resoved promisse data');
// })

// p.then(respoonse => console.log(respoonse));

// let p = new Promise((resolve, reject) => {
//   reject('Reject promisse data');
// })

// p.then(respoonse => console.log(respoonse))
//  .catch(error => console.log(error));

let p = new Promise((resolve, reject) => {
  setTimeout(() => resolve('Resolve promisse data'), 1500);
})

p.then(respoonse => console.log(respoonse))
 .catch(error => console.log(error));

console.log('after promise consumption');

// Promisses - Ajax
// var root = 'https://jsonplaceholder.typicode.com';

// $.ajax({
//   url: root + '/posts/1',
//   method: 'GET'
// }).then(function(data) {
//   console.log(data);
// });

//Promisses - Fetch
const root = 'https://jsonplaceholder.typicode.com/posts/1';

fetch(root, {method: "GET"})
	.then(response => response.json())
	.then(json => console.log(json));

// ES7
let newA = Math.pow(2, 5);
console.log(newA);

let newB = 2**5;
console.log(newB);

let newC = 'wunderful'.includes('wall');
console.log(newC);

let newD = [1, 2, 3, 4, 5, 6].includes(7);
console.log(newD);

// ES8
let obj = {a: 'one', b: 'two', c: 'three'};
let keys = Object.keys(obj);
console.log(keys);

let newValues = Object.values(obj);
console.log(newValues);

let entries = Object.entries(obj);
console.log(entries);

for(let entry of entries) {
	console.log(`key: ${entry[0]}, value: ${entry[1]}`);
}

// Async
async function async_one() {
	return 'one';
}
// async_one().then(response => console.log(response)); //Descomentar para usar

async function async_two() {
	throw new Error('Issue with async!');
}
// async_two().catch(error => console.log(error)); //Descomentar para usar

async function async_three() {
	const one = await async_one();
	console.log(one);
	const two = await async_two();
	console.log(two)
}

async_three();

async function async_four() {
	const[res_one, res_two] = await Promise.all(
		[async_one(), async_two()]
	)
	console.log(res_one, res_two);
}
async_four();