// Explicita
let nullVariable: null;
nullVariable = null;
// nullVariable = 1; // Error

let otherVariable = null; // Implicitamente null se entiende como any si no se declara el tipo
otherVariable = "test";

console.log("nullVariable", nullVariable);
console.log("otherVariable", otherVariable);

// Undefined
let undefinedVariable: undefined = undefined;
// undefinedVariable = "test"; // Error

let otherUndefined = undefined; // Implicitamente undefined se entiende como any si no se declara el tipo
otherUndefined = 1;

console.log("undefinedVariable", undefinedVariable);
console.log("otherUndefined", otherUndefined);

// Null y Undefined: Como subtipos

// --strictNullChecks (Flag de compilador) No deja asignar estos valores por la revision estatica de tipos
let albumName: string;
// albumName = null;
// albumName = undefined;
