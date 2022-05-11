import { Dog } from './09-protected';

// function getValue(value: unknown) {
//   return value;
// }

// function getValue(value: string | number) {
//   return value;
// }

function getValue<T>(value: T) {
  const array: T[] = [value];

  return value;
}

getValue<number>(12);
getValue<string>('12');
getValue<number[]>([11, 1]);
const fifi = new Dog('fifi', 'jhoan');
getValue<Dog>(fifi);
// Promise<boolean>
// axios.get<string[]>
