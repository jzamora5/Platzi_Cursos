export {};
// Funcion para mostrar una Fotografia
enum PhotoOrientation {
  Landscape, // 0
  Portrait, // 1
  Square, // 2
  Panorama, // 3
}

// Superclase

abstract class Item {
  protected readonly _id: number;
  protected _title: string;

  constructor(id: number, title: string) {
    this._id = id;
    this._title = title;
  }

  get id() {
    return this._id;
  }

  // set id(id: number) {
  //   this._id = id;
  // }

  get title() {
    return this._title;
  }

  set title(title: string) {
    this._title = title;
  }
}

// get y set

class Picture extends Item {
  public static photoOrientation = PhotoOrientation;

  // Propiedades
  private _orientation: PhotoOrientation;

  public constructor(id: number, title: string, orientation: PhotoOrientation) {
    // this._id = id;
    // this._title = title;
    super(id, title);
    this._orientation = orientation;
  }

  get orientation() {
    return this._orientation;
  }

  set orientation(o: PhotoOrientation) {
    this._orientation = o;
  }

  public toString() {
    return `[id: ${this.id}],
             title: ${this.title},
             orientation: ${this.orientation}`;
  }
}

class Album extends Item {
  private pictures: Picture[];

  public constructor(id: number, title: string) {
    super(id, title);
    this.pictures = [];
  }

  public addPicture(picture: Picture) {
    this.pictures.push(picture);
  }
}

const album: Album = new Album(1, "Personal Pictures");
const picture: Picture = new Picture(
  1,
  "Platzi session",
  PhotoOrientation.Square
);
album.addPicture(picture);

console.log("album", album);

// Accediendo a miembros privados
console.log("picture.idxx", picture.id); // get id()
// picture.id = 100; // private, set id(100)
picture.title = "Another title"; // private
album.title = "Personal Activities"; // private
console.log("picture.idxx", picture.id); // get id()
console.log("album", album);

// const item = new Item(1, "Test tile"); // Error
// console.log("item", item);

// Probar el miembro estatico
console.log("PhotoOrientation", Picture.photoOrientation.Landscape);
