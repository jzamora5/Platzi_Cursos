export class Animal {
  constructor(public name: string) {}

  move() {
    console.log('Moving');
  }

  greeting() {
    return `Hello, I'm ${this.name}`;
  }
}

export class Dog extends Animal {
  // Name no lleva public para que TS no aplique el shortcut is no se defina name
  // en la clase hija y la clase padre, sino solo en la padre
  constructor(name: string, public owner: string) {
    super(name);
  }

  woof(times: number): void {
    for (let index = 0; index < times; index++) {
      console.log('woof!');
    }
  }
}

const fifi = new Animal('fifi');
fifi.move();
console.log(fifi.greeting());

const cheis = new Dog('cheis', 'jhoan');
cheis.move();
console.log(cheis.greeting());
cheis.woof(2);
console.log(cheis.owner);
