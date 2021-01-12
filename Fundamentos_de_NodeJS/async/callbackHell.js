function hola(nombre, callback) {
  setTimeout(function () {
    console.log("Hola, " + nombre);
    callback(nombre);
  }, 1000);
}

function hablar(callback) {
  setTimeout(function () {
    console.log("Bla Bla Bla");
    callback();
  }, 1000);
}

function adios(nombre, callback) {
  setTimeout(function () {
    console.log("Adios " + nombre);
    callback();
  }, 1000);
}

function conversacion(nombre, veces, callback) {
  if (veces > 0) {
    hablar(function () {
      conversacion(nombre, --veces, callback);
    });
  } else {
    adios(nombre, callback);
  }
}

// --

console.log("Iniciando proceso...");

hola("Larry", function (nombre) {
  conversacion(nombre, 3, function () {
    console.log("Proceso terminado");
  });
});

// hola("Larry", function (nombre) {
//   hablar(function () {
//     hablar(function () {
//       hablar(function () {
//         adios(nombre, function () {
//           console.log("Terminando proceso...");
//         });
//       });
//     });
//   });
// });
