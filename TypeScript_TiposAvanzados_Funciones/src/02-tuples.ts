const prices: (number | string)[] = [1, 2, 3, 'a'];
prices.push(1);
prices.push('1');

let user: [string, number, boolean] = ['jhoanuser', 26, true];
user = ['username', 15, false];

const [username, age] = user;
console.log(username);
console.log(age);
