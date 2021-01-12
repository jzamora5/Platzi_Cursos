const fs = require("fs");
const stream = require("stream");
const util = require("util");

let data = "";

let readableStream = fs.createReadStream(__dirname + "/input.txt");

readableStream.setEncoding("utf-8");
readableStream.on("data", function (chunk) {
  data += chunk;
});

readableStream.on("end", function () {
  //   console.log(data);
});

// process.stdout.write("hola");
// process.stdout.write("que");
// process.stdout.write("tal\n");

// Stream Para leer y escribir
const Transform = stream.Transform;

function Mayus() {
  Transform.call(this);
}

util.inherits(Mayus, Transform);

Mayus.prototype._transform = function (chunk, codif, cb) {
  chunkMayus = chunk.toString().toUpperCase();
  this.push(chunkMayus);
  cb();
};

let mayus = new Mayus();

readableStream.pipe(mayus).pipe(process.stdout);
