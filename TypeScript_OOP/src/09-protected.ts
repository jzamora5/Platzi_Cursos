export abstract class Animal {
  constructor(protected name: string) {}

  move() {
    console.log('Moving');
  }

  greeting() {
    return `Hello, I'm ${this.name}`;
  }

  protected doSomething() {
    console.log('doo');
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
      console.log(`woof! ${this.name}`);
    }
    this.doSomething();
  }

  move() {
    console.log('moving as a dog');
    super.move();
  }
}

const fifi = new Animal('fifi');
fifi.move();
console.log(fifi.greeting());

const cheis = new Dog('cheis', 'jhoan');
console.log(cheis.greeting());
cheis.woof(1);
console.log(cheis.owner);
// cheis.name = 'otro nombre'; No permitido por el protected
cheis.woof(1);
// cheis.doSomething();
cheis.move();
