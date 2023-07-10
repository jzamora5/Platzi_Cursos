const socket = io();

socket.on("welcome", (data) => {
  console.log(data);
  text.textContent = data;
});

const emitToServer = document.querySelector("#emit-to-server");

emitToServer.addEventListener("click", () => {
  socket.emit("server", "Hola, servidor 👀");
});

socket.on("everyone", (message) => {
  console.log(message);
});

// function checkSocketStatus() {
//   console.log("Estado del socket:", socket.connected);
// }

// socket.on("connect", () => {
//   console.log("El socket se ha conectado: ", socket.id);
//   checkSocketStatus();
// });

// socket.on("connect_error", () => {
//   console.log("No pude conectarme 😔");
// });

// socket.on("disconnect", () => {
//   console.log("El socket se ha desconectado: ", socket.id);
//   checkSocketStatus();
// });

// socket.io.on("reconnect_attempt", () => {
//   console.log("Estoy intentando reconectarme 🖥️");
// });

// socket.io.on("reconnect", () => {
//   console.log("¡Me he vuelto a conectar! 😄");
// });
