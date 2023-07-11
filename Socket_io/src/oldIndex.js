const express = require("express");
const path = require("path");
const { createServer } = require("http");
const { Server } = require("socket.io");

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer);

app.use(express.static(path.join(__dirname, "views")));

const socketsOnline = [];

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

io.on("connection", (socket) => {
  // console.log("Clientes conectados: ", io.engine.clientsCount);
  // console.log("ID del socket conectado", socket.id);
  // socket.on("disconnect", () => {
  //   console.log("El socket " + socket.id + " se ha desconectado");
  // });
  // socket.conn.once("upgrade", () => {
  //   console.log(
  //     "Hemos pasado de HTTP Long-Polling a",
  //     socket.conn.transport.name
  //   );
  // });

  socketsOnline.push(socket.id);

  // Emisión básica
  socket.emit("welcome", "Ahora estás conectado 😎");

  socket.on("server", (data) => {
    console.log(data);
  });

  // Emisión a todos
  io.emit("everyone", socket.id + " se ha conectado 👀");

  // Emisión a uno solo
  socket.on("last", (message) => {
    const lastSocket = socketsOnline[socketsOnline.length - 1];

    io.to(lastSocket).emit("salute", message);
  });

  // on, once, off

  // socket.emit("on", "Holi");
  // socket.emit("on", "Holi");

  // socket.emit("once", "holi");
  // socket.emit("once", "holi");

  socket.emit("off", "holi");

  setTimeout(() => {
    socket.emit("off", "holi");
  }, 3000);
});

httpServer.listen(3000);
