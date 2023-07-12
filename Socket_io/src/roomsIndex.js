const express = require("express");
const path = require("path");
const { createServer } = require("http");
const { Server } = require("socket.io");

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer);

app.use(express.static(path.join(__dirname, "views")));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

io.on("connection", (socket) => {
  socket.connectedRoom = ""; // Custom property

  socket.on("connect to room", (room) => {
    console.log("Socket connected room", socket.connectedRoom);
    socket.leave(socket.connectedRoom);
    console.log("Socket id", socket.id);

    switch (room) {
      case "room1":
        socket.join("room1"); // Puede ser nombre diferente a room
        socket.connectedRoom = "room1";
        break;

      case "room2":
        socket.join("room2");
        socket.connectedRoom = "room2";
        break;

      case "room3":
        socket.join("room3");
        socket.connectedRoom = "room3";
        break;

      default:
        break;
    }
  });

  socket.on("message", (message) => {
    const room = socket.connectedRoom;

    io.to(room).emit("send message", {
      message,
      room,
    });
  });
});

httpServer.listen(3000);
