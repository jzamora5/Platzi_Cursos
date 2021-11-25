export {};
// Funcion para mostrar una Fotografia
enum PhotoOrientation {
  Landscape, // 0
  Portrait, // 1
  Square, // 2
  Panorama, // 3
}

// get y set

class Picture {
  // Propiedades
  #id: number;
  private _title: string;
  private _orientation: PhotoOrientation;

  public constructor(id: number, title: string, orientation: PhotoOrientation) {
    this.#id = id;
    this._title = title;
    this._orientation = orientation;
  }

  get id() {
    return this.#id;
  }

  set id(id: number) {
    this.#id = id;
  }

  get title() {
    return this._title;
  }

  set title(title: string) {
    this._title = title;
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

class Album {
  private _id: number;
  private _title: string;
  private pictures: Picture[];

  public constructor(id: number, title: string) {
    this._id = id;
    this._title = title;
    this.pictures = [];
  }

  get id() {
    return this._id;
  }

  set id(id: number) {
    this._id = id;
  }

  get title() {
    return this._title;
  }

  set title(title: string) {
    this._title = title;
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
picture.id = 100; // private, set id(100)
picture.title = "Another title"; // private
album.title = "Personal Activities"; // private
console.log("picture.idxx", picture.id); // get id()
console.log("album", album);
