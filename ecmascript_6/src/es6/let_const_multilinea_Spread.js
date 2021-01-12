let hello = "Hello";
let world = "World";

let epicPhrase = hello + " " + world;
console.log(epicPhrase);

let epicPhrase2 = `${hello} ${world}`;

let lorem =
  "Lorem impusm mangama ralala enxame tarune djha \n" +
  "Otra frase epica que necesitamos";

// es6
let lorem2 = `
otra frase epica que necesitamos
ahora es otra frase epica
  `;

console.log(lorem);

console.log(lorem2);

let person = {
  name: "oscar",
  age: 32,
  country: "MX",
};

console.log(person.name, person.age);

let { name: larry, age, country } = person;

console.log(larry, age, country);

let team1 = ["Oscar", "Julian", "Ricardo"];
let team2 = ["Valieria", "Yesica", "Camila"];

let education = ["David", ...team1, ...team2];

console.log(education);

{
  var globalVar = "Global Var";
}

{
  let globalLet = "Global Let";
  console.log(globalLet);
}

console.log(globalVar);
// console.log(globalLet);
