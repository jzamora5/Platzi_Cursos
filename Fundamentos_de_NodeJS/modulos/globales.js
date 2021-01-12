let i = 0;
let intervalo = setInterval(function () {
  if (i === 3) {
    clearInterval(intervalo);
  }
  i++;
  console.log("Hola");
}, 100);

setImmediate(function () {
  console.log("Hola Immediate");
});

console.log(process);
console.log(__dirname);
console.log(__filename);

global.miVariable = "elValor";

console.log(miVariable);
