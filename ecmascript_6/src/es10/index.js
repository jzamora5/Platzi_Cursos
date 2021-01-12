// FLATTEN ARRAYS

let array = [1, 2, 3, [1, 2, 3, [1, 2, 3]]];

console.log(array.flat());
console.log(array.flat(2)); // DEPTH

// FLAT MAP
let array2 = [1, 2, 3, 4, 5];
console.log(array2.flatMap((value) => [value, value * 2]));

// TRIM START

let hello = "          hello world";

console.log(hello);
console.log(hello.trimStart());

// TRIM END

let hello2 = "hello world            ";
console.log(hello2);
console.log(hello2.trimEnd());

// NO PASAR ERROR AL CATCH  catch (error)
// PERO IGUAL ESTA DISPONIBLE

// optional catch binding

try {
} catch {
  error;
}

// OBJECT FROM ENTRIES

let entries = [
  ["name", "oscar"],
  ["age", 32],
];

console.log(Object.fromEntries(entries));

// DESCRIPCION OBJETO TIPO SIMBOLO

let mySymbl = `My Symbol`;

let symbol = Symbol(mySymbl);

console.log(symbol.description);
