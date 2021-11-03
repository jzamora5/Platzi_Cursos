// Explicita
var nullVariable;
nullVariable = null;
// nullVariable = 1; // Error
var otherVariable = null; // Implicitamente null se entiende como any si no se declara el tipo
otherVariable = "test";
console.log("nullVariable", nullVariable);
console.log("otherVariable", otherVariable);
// Undefined
var undefinedVariable = undefined;
// undefinedVariable = "test"; // Error
var otherUndefined = undefined; // Implicitamente undefined se entiende como any si no se declara el tipo
otherUndefined = 1;
console.log("undefinedVariable", undefinedVariable);
console.log("otherUndefined", otherUndefined);
// Null y Undefined: Como subtipos
// --strictNullChecks (Flag de compilador)
var albumName;
albumName = null;
albumName = undefined;
