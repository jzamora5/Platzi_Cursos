// OBJECT ENTRIES

const data = {
  frontend: "Oscar",
  backend: "Isabel",
  design: "Ana",
};

const entries = Object.entries(data);
console.log(entries);

// Length of object
console.log(entries.length);

// Values of object

const data2 = {
  frontend: "Oscar",
  backend: "Isabel",
  design: "Ana",
};

const values = Object.values(data2);

console.log(values);
console.log(values.length);

// PADDING

const string = "hello";

console.log(string.padStart(7, "hi"));
console.log(string.padEnd(7, "hi"));

// TRAILING COMMANDS

const obj3 = {
  name: "Jhoan",
};
