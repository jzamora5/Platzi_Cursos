// Orientacion para Fotografias

// Manera clasica JS
// const landscape = 0;
// const portrait = 1;
// const square = 2;
// const panorama = 3;

// Implicito
// enum PhotoOrientation {
//   Landscape, // 0
//   Portrait, // 1
//   Square, // 2
//   Panorama, // 3
// }

// Explicito
enum PhotoOrientation {
  Landscape = 0, // 0
  Portrait = 1, // 1
  Square = 2, // 2
  Panorama = 3, // 3
}

const landscape: PhotoOrientation = PhotoOrientation.Landscape;
console.log("landscape", landscape);
console.log("Landscape", PhotoOrientation[0]);

enum PicutureOrientation {
  Landscape = 10,
  Portrait, // 11
  Square, // 12
  Panorama, // 13
}

console.log("portrait", PicutureOrientation.Portrait);

enum Country {
  Bolivia = "bol",
  Colombia = "col",
  Mexico = "mex",
  EEUU = "usa",
  España = "esp",
}

const country: Country = Country.Colombia;
console.log("country", country);
