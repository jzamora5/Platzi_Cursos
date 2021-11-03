// Void

// Tipo explicito
function showInfo(user: any): void {
  console.log("User Info", user.id, user.username, user.firstName);
  // return "hola";
}

showInfo({
  id: 1,
  username: "jhoanx",
  firstName: "Jhoan",
});

// Tipo Inferido

function showFormattedInfo(user: any) {
  console.log(
    "User Info",
    `
    id: ${user.id},
    username: ${user.username},
    firstName: ${user.firstName}
  `
  );
}

showFormattedInfo({
  id: 1,
  username: "jhoanx",
  firstName: "Jhoan",
});

// Tipo Void, como tipo de dato en una variable
let unusable: void;
// unusable = null;
// unusable = undefined;

// Da error en strict mode = true, pero no da error cuando está false

// Tipo Never

function handleError(code: number, message: string): never {
  // Process your code here
  // Generate a message

  throw new Error(`${message}. Code: ${code}`);
}

try {
  handleError(404, "Not Found");
} catch (error) {}

function sumNumbers(limit: number): never {
  let sum = 0;
  while (true) {
    sum++;
  }
}

sumNumbers(10);
// ciclo infinito, programa nunca termina
