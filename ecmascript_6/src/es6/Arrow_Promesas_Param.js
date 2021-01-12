let name = "Jhoan";
let age = 25;

let obj = { name: name, age: age };

// es6

let obj2 = { name, age };

console.log(obj);
console.log(obj2);

const names = [
  { name: "Jhoan", age: 25 },
  { name: "Yesica", age: 27 },
];

let listOfNames = names.map(function (item) {
  console.log(item.name);
});

let listOfNames2 = names.map((item) => console.log(item.name));

const listOfNames3 = (name, age, country) => {
  console.log(name, age, country);
};

const listOfNames4 = (name) => {
  console.log(name);
};

const square = (num) => num * num;

const helloPromise = () => {
  return new Promise((resolve, reject) => {
    if (true) {
      resolve("Hey!");
    } else {
      reject("Oops");
    }
  });
};

helloPromise()
  .then((response) => console.log(response))
  .then(() => console.log("hola"))
  .catch((error) => console.log(error));
