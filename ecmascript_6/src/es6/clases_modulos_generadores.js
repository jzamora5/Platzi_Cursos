class Calculator {
  constructor() {
    this.valueA = 0;
    this.valueB = 0;
  }

  sum(valueA, valueB) {
    this.valueA = valueA;
    this.valueB = valueB;

    return this.valueA + this.valueB;
  }
}

const calc = new Calculator();

console.log(calc.sum(2, 3));

import { hello } from "./module.js";

// Generators

function* helloWord() {
  if (true) {
    yield "Hello";
  }

  if (true) {
    yield "World";
  }
}

const generatorHello = helloWord();

console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
