const withoutEnd = () => {
  while (true) {
    console.log('nunca parar de aprender');
  }
};

const fail = (message: string) => {
  throw new Error(message);
};

const example = (input: unknown) => {
  if (typeof input === 'string') {
    return 'es un string';
  } else if (Array.isArray(input)) {
    return 'es un array';
  }

  return fail('not match');
};

console.log(example('Hola'));
console.log(example([]));
console.log(example(12121));
console.log(example('Hola despues del fail'));
