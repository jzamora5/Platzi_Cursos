let promise = function (msg) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (false) {
        resolve(msg);
      } else {
        reject(new Error("Oops"));
      }
    }, 500);
  });
};

promise("Hello")
  .then((response) => console.log(response))
  .catch((error) => console.log(error));
