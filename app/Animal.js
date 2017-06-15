class Animal {
  constructor(name, heigth) {
    this.name = name;
    this.heigth = heigth;
  }

  hello() {
    console.log(`Hi! I'm ${this.name} from Animal Kingdom`);
  }
};

let lion = new Animal('Mustafa', 54);
console.log(lion);
lion.hello();

export {Animal};