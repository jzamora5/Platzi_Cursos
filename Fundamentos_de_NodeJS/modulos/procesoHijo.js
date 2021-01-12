// const exec = require('child_process').exec
const { exec, spawn } = require("child_process");
// import { exec } from "child_process";

exec("ls -la", (err, stdout, sterr) => {
  if (err) {
    console.error(err);
    return false;
  }
  console.log(stdout);
});

// exec("node modulos/consola.js", (err, stdout, sterr) => {
//   if (err) {
//     console.error(err);
//     return false;
//   }
//   console.log(stdout);
// });

let proceso = spawn("ls", ["-la"]);

console.log(proceso.pid);
console.log(proceso.connected);

proceso.stdout.on("data", function (dato) {
  console.log("Spawn Process");
  console.log("Is process killed", proceso.killed);
  console.log(dato.toString());
});

proceso.on("exit", function () {
  console.log("El proceso terminó");
});
