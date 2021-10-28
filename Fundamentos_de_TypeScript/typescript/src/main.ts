console.log("Hola Platzi World");

// Tipo: Number

// Explicito
let phone: number;
phone = 1;
phone = 54234567;
// phone = "hola"; // Error

// Inferido
let phoneNumber = 54234567;
phoneNumber = 123;
// phoneNumber = true; // Error por tipo

let hex: number = 0xf00d;
let binario: number = 0b1010;
let octal: number = 0o744;

// Tipo: Boolean
let isPro: boolean;
isPro = true;
isPro = false;
// isPro = 1; // Error por tipo

// Inferido
let isUserPro = false;
isUserPro = true;
// isUserPro = 10; // Error por tipo

// Strings
let username: string = "luixaviles";
username = "Luis";
// username = true; // Error por tipo

// Template String
// Uso de back-tick `
let userInfo: string;
userInfo = `
  User Info:
  username: ${username}
  firstName: ${username + " Aviles"}
  phone: ${phone}
  isPro: ${isPro}
`;
console.log("userInfo", userInfo);
