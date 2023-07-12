// const socket = io();

const user = prompt("Escribe tu usuario");

const profes = ["RetaxMaster", "juandc", "GNDX"];

let socketNamespace, group;

const chat = document.querySelector("#chat");
const namespace = document.querySelector("#namespace");

if (profes.includes(user.toLowerCase())) {
  socketNamespace = io("/teachers");
  group = "teachers";
} else {
  socketNamespace = io("/students");
  group = "students";
}

socketNamespace.on("connect", () => {
  namespace.textContent = group;
});
