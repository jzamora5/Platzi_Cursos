function otraFuncion() {
  serompe();
}

function serompe() {
  return 3 + z;
}

function seRompeAsincrona() {
  setTimeout(() => {
    try {
      let x = 3 + z;
    } catch (err) {
      console.error("ERROR");
    }
  });
}

try {
  //   otraFuncion();
  seRompeAsincrona();
} catch (error) {
  console.error("Vaya, algo se ha roto");
  console.error(error.message);
} finally {
  console.log("CHEESE");
}
