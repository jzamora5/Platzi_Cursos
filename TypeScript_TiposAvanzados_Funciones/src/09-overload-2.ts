// Jhoan => [J,h,o,a,n] => string => string[]
// [J,h,o,a,n] => Jhoan => string[] => string

export function parseStr(input: string): string[];
export function parseStr(input: string[]): string;
export function parseStr(input: number): boolean;

// export function parseStr(input: string | string[]): string | string[] {
//   if (Array.isArray(input)) {
//     return input.join(''); // string
//   } else {
//     return input.split(''); // string[]
//   }
// }

export function parseStr(input: unknown): unknown {
  if (Array.isArray(input)) {
    return input.join(''); // string
  } else if (typeof input === 'string') {
    return input.split(''); // string[]
  } else if (typeof input === 'number') {
    return true; // boolean
  }
}

const rtaArray = parseStr('Jhoan');
console.log('rtaArray', 'Jhoan =>', rtaArray);

const rtaString = parseStr(['J', 'h', 'o', 'a', 'n']);
console.log('rtaString', "['J', 'h', 'o', 'a', 'n'] =>", rtaString);

const rtaBoolean = parseStr(12);
