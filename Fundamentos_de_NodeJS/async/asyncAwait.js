function hola(nombre) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log("Hola, " + nombre);
      reject("Larry");
    }, 1000);
  });
}

function hablar(nombre) {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      console.log("Bla Bla Bla");
      resolve(nombre);
    }, 500);
  });
}

function adios(nombre, callback) {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      console.log("Adios " + nombre);
      // resolve(nombre);
      resolve("Hay un error en adios");
    }, 1000);
  });
}

async function main() {
  let nombre;
  try {
    nombre = await hola("Larry");
  } catch (error) {
    console.error("Error " + error);
    nombre = "Eduardo";
  }
  await hablar(nombre);
  await adios(nombre);
}

main();
console.log("Segunda Instruccion");
