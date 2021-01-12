const sharp = require("sharp");

sharp("original.png").resize(80).greyscale().toFile("resized.png");
