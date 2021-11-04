// Type: Object
let user: object;
user = {}; // Object

user = {
  id: 1,
  username: "paparazzi",
  firstName: "Pablo",
  isPro: true,
};

console.log("user", user);
// Object vs object (Clase JS vs tipo TS)

const myObj = {
  id: 1,
  username: "paparazzi",
  firstName: "Pablo",
  isPro: true,
};

const isInstance = myObj instanceof Object; // Clase Object de JavaScript
console.log("isInstance", isInstance);
console.log("myObj.username", myObj.username);
