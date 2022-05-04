console.log('Math', Math.PI)

class MyMath  {
    static readonly PI = 3.14

    static max(...numbers: number[]) {
        return numbers.reduce((max, item) => max >= item ? max: item, numbers[0])
    }
}

console.log('MyMath', MyMath.PI)
// MyMath.PI = 2 // readonly does not allow it
console.log('MyMath.max', MyMath.max(12, 2, 1, 1112, 9))
console.log('MyMath.max', MyMath.max(-2, -1, -3))