// const process = require("process"); YA ES GLOBAL

process.on("beforeExit", () => {
  console.log("El proceso va a terminar");
});

process.on("exit", () => {
  console.log("El proceso acabó");
  setTimeout(() => {
    console.log("Esto nunca se va a ver");
  }, 100);
});

process.on("uncaughtException", (err, origen) => {
  console.error("Vaya, se nos ha olvidado capturar un error");
  console.error(err);
  console.error(origen);
  setTimeout(() => {
    console.log("Esto viene de las excepciones");
  }, 100);
});
// process.on('uncaughtRejection')

// let err = new Error("Esto es un error");
// throw err;
