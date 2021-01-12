function hola(nombre) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log("Hola, " + nombre);
      resolve("Larry");
    }, 1000);
  });
}

function hablar(nombre) {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      console.log("Bla Bla Bla");
      resolve(nombre);
    }, 1000);
  });
}

function adios(nombre, callback) {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      console.log("Adios " + nombre);
      // resolve(nombre);
      reject("Hay un error en adios");
    }, 1000);
  });
}

console.log("Iniciando el proceso");
hola("Larry")
  .then(hablar)
  .then(hablar)
  .then(hablar)
  .then(adios)
  .then((nombre) => {
    console.log("Terminado el proceso " + nombre);
  })
  .catch((error) => {
    console.error("Error");
    console.error(error);
  });
