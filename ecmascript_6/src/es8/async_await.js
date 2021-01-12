const helloWorld = () => {
  return new Promise((resolve, reject) => {
    if (false) {
      setTimeout(() => resolve("Hello World"), 3000);
    } else {
      reject(new Error("Test Error"));
    }
  });
};

// const helloAsync = async () => {
//   const hello = await helloWorld();
//   console.log(hello);
// };

// helloAsync();

const anotherFunction = async () => {
  try {
    const hello = await helloWorld();
    console.log(hello);
  } catch (error) {
    console.log(error);
  }
};

anotherFunction();
