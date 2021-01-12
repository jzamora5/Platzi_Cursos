// Interfaces

enum Color {
  Rojo = "Rojo",
  Verde = "Verde",
}

interface Rectangulo {
  ancho: number;
  alto: number;
  color?: Color;
}

let rect: Rectangulo = {
  ancho: 4,
  alto: 6,
  //   color: Color.Rojo,
};

function area(r: Rectangulo) {
  return r.alto * r.ancho;
}

const areaRect = area(rect);
console.log(areaRect);

console.log(rect.toString());

rect.toString = function () {
  return this.color ? `Un rectangulo ${this.color}` : `Un rectangulo`;
};

console.log(rect.toString());
