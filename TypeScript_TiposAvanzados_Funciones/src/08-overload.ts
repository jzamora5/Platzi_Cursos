// Jhoan => [J,h,o,a,n] => string => string[]
// [J,h,o,a,n] => Jhoan => string[] => string

export function parseStr(input: string | string[]): string | string[] {
  if (Array.isArray(input)) {
    return input.join(''); // string
  } else {
    return input.split(''); // string[]
  }
}

const rtaArray = parseStr('Jhoan');
console.log('rtaArray', 'Jhoan =>', rtaArray);

const rtaString = parseStr(['J', 'h', 'o', 'a', 'n']);
console.log('rtaString', "['J', 'h', 'o', 'a', 'n'] =>", rtaString);
