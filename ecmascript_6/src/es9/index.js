// OPERADOR DE REPOSO

const obj = {
  name: "oscar",
  age: 32,
  country: "MX",
};

let { country, ...all } = obj;
console.log(country, all);

// PROPIEDADES DE PROPAGACION

const obj2 = {
  name: "oscar",
  age: 32,
};

const obj3 = {
  ...obj2,
  country: "MX",
};

console.log(obj3);

// PROMISE FINALLY

const helloWorld = () => {
  return new Promise((resolve, reject) => {
    true
      ? setTimeout(() => resolve("Hello World"), 3000)
      : reject(new Error("Test Error"));
  });
};

helloWorld()
  .then((response) => console.log(response))
  .catch((error) => console.log(error))
  .finally(() => console.log("Finalizó"));

// REGEX

const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/;
const match = regexData.exec("2018-04-20");
const year = match[1];
const month = match[2];
const day = match[3];
console.log(year, month, day);
