console.log("log");
console.info("info");
console.error("error");
console.warn("warn");

let tabla = [
  {
    a: 1,
    b: "Z",
  },
  {
    a: 2,
    b: "Otra",
  },
];

console.log(tabla);
console.table(tabla);

console.group("Conversacion");
console.log("Hola");
console.group("Bla");
console.log("Bla Bla Bla");
console.log("Bla Bla Bla");
console.log("Bla Bla Bla");
console.groupEnd();
console.log("Adios");

console.groupEnd();

console.log("Cheese");

function function1() {
  console.group("Funcion 1");
  console.log("Esto es de la funcion 1");
  function2();
  console.groupEnd("Funcion 1");
}
function function2() {
  console.group("Funcion 2");
  console.log("Ahora esto es de la funcion 2");
  console.groupEnd("Funcion 2");
}

console.log("Empezamos");
function1();

console.count("Veces");
console.count("Veces");
console.count("Veces");
console.countReset("Veces");
console.count("Veces");
