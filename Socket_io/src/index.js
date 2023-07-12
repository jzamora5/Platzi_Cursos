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

const teachers = io.of("teachers");
const students = io.of("students");

teachers.on("connection", (socket) => {
  console.log(socket.id + " se ha conectado a la sala de profes");
});

students.on("connection", (socket) => {
  console.log(socket.id + " se ha conectado a la sala de estudiantes");
});

httpServer.listen(3000);
