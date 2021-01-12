console.time("todo");
let suma = 0;

console.time("bucle");
for (let i = 0; i < 1000000000; i++) {
  suma += 1;
}
console.timeEnd("bucle");

let suma2 = 0;

console.time("bucle 2");
for (let j = 0; j < 100000000; j++) {
  suma2 += 1;
}
console.timeEnd("bucle 2");

console.timeEnd("todo");

console.time("Asincrono");
console.log("Empezó el proceso asincrono");

asincrona().then(() => {
  console.timeEnd("Asincrono");
});

function asincrona() {
  return new Promise((resolve) => {
    setTimeout(function () {
      console.log("Terminó el proceso asincrono");
      resolve();
    }, 0);
  });
}
