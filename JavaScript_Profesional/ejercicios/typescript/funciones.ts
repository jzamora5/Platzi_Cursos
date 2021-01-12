// Anotaciones en funcion

function add(a: number, b: number): number {
  return a + b;
}

const sum = add(4, 6);

console.log(sum);

// Funcion que regresa funcion

function createAdder(a: number): (number) => number {
  return function (b: number) {
    return a + b;
  };
}

const addFour = createAdder(4);
const forPlus6 = addFour(6);

// Optional Arguments

function fullName(firstName: string, lastName?: string): string {
  return `${firstName} ${lastName}`;
}

const richard = fullName("Richard");

console.log(richard);

function fullName2(firstName: string, lastName: string = "Smith"): string {
  return `${firstName} ${lastName}`;
}

const agente = fullName2("Agente");

console.log(agente);
