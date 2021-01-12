console.log("Hello, TypeScript");

function add(a: number, b: number) {
  return a + b;
}

const sum = add(2, 3);

// Boolean

let muted: boolean = true;

// Numeros
let age = 6;
let numerador: number = 42;
let denominador: number = age;
let resultado = numerador / denominador;

// String
let nombre: string = "Richard";
let saludo = `Me llamo ${nombre}`;

// Arreglos
let people: string[] = [];
people = ["Isabel", "Nicole", "Raul"];

let peopleAndNumbers: Array<string | number> = [];
peopleAndNumbers.push("Ricardo");
peopleAndNumbers.push(9000);

// Enum

// Si no se pone que cada variable es = a algo, la toma como 0, 1, 2, ...
enum Color {
  Rojo = "Rojo",
  Verde = "Verde",
  Azul = "Azul",
}

let colorFavorito: Color = Color.Verde;
console.log(`Mi color favorito es ${colorFavorito}`);

// Any Variables que cambian de tipo
let comodin: any = "Joker";
comodin = { type: "Wildcard" };

// Object

let someObject: object = { type: "Wildcard" };
