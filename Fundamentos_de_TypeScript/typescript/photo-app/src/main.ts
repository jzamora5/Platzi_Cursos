import { Album, PhotoOrientation, Picture, User } from "./photo-app";

const user = new User(1, "luixaviles", "Luis", true);
const album = new Album(10, "Platzi Pictures");
const picture = new Picture(
  1,
  "TypeScript Course",
  "2020-03",
  PhotoOrientation.Landscape
);

// Creamos relaciones

user.addAlbum(album);
album.addPicture(picture);

console.log("user", user);
