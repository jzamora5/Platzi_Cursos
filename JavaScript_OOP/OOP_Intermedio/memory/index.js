const obj1 = {
  a: "a",
  b: "b",
  c: {
    d: "d",
    e: "e",
  },

  editA() {
    this.a = "AAAA";
  },
};

const obj2 = {};

// COPY WITH JSON METHODS

for (prop in obj1) {
  obj2[prop] = obj1[prop];
}

const obj3 = Object.assign({}, obj1);
const obj4 = Object.create(obj1);

const stringifiedComplexObj = JSON.stringify(obj1);
const obj5 = JSON.parse(stringifiedComplexObj);

// RECURSION

// function recursiva() {
//   if () {
//     // llamados recursivos
//   } else {
//     // llamados normales, sin recursividad
//   }
// }

const numeritos = [0, 1, 2, 3, 4, 55, 6, 7, 8, 9, 435678, 7, 2, 3];
// let numerito = 0;

// for (let index = 0; index < numeritos.length; index++) {
//   numerito = numeritos[index];
//   console.log({ index, numerito });
// }

function recursiva(numbersArray) {
  if (numbersArray.length !== 0) {
    const firstNum = numbersArray[0];
    console.log(firstNum);

    numbersArray.shift();
    return recursiva(numbersArray);
  }
}

recursiva(numeritos);
