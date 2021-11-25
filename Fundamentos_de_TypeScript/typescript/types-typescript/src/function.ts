export {};
// Crear una Fotografia
// function createPicture(title, date, size) {
//   //  title
// }

type SquareSize = "100x100" | "500x500" | "1000x1000";

// Usamos TS, definimos tipos para parametros

// function createPicture(title: string, date: string, size: SquareSize) {
//   // Se crea la Fotografia
//   console.log("create Picture using", title, date, size);
// }

// Parametros Opciones en funciones

function createPicture(title?: string, date?: string, size?: SquareSize) {
  // Se crea la Fotografia
  console.log("create Picture using", title, date, size);
}

createPicture("My Birthday", "2020-03-10", "100x100");
createPicture("Colombia Trip", "2020-03");
createPicture("Colombia Trip");
createPicture();

// Flat Arrow Function
let createPic = (title: string, date: string, size: SquareSize) => {
  return {
    title,
    date,
    size,
  };
};

const picture = createPic("Platzi session", "2020-03-10", "100x100");
console.log("picture", picture);

// Tipo de retorno con TypeScript

function handleError(code: number, message: string): never | string {
  // Procesamiento del codigo, mensaje
  if (message === "error") {
    throw new Error(`${message}. Code error: ${code}`);
  } else {
    return "An error has occurred";
  }
}

try {
  let result = handleError(200, "OK");
  console.log("result", result);
  result = handleError(404, "error");
  console.log(`result`, result);
} catch (error) {}
