// const element = document.createElement('h1');
// element.innerText = 'Hello, Platzi Badges!';

// const container = document.getElementById('app');

// container.appendChild(element);

import React from "react";
import ReactDOM from "react-dom";

// JSX
//const jsx = <h1>Hello, Platzi Badges!!</h1>;

// No JSX
// createElement(elemento, atributos(props), Children)
//const element = React.createElement("h1", {}, "Hola! Soy los children");

// const element = React.createElement(

//   "a",
//   { href: "http://platzi.com" },
//   "Ir a Platzi"
// );

const name = "Richard";
const sum = (n) => n + 3;
//const element = React.createElement("h1", {}, `Hola, soy ${name}`);
// const jsx = <h1>Hola soy, {name + sum(2)}</h1>;
// Valores falsos no se ven

const jsx = (
  <div>
    <h1>Hola, soy Richard</h1>
    <p>Soy Ingeniero Front End</p>
  </div>
);

const element = React.createElement(
  "div",
  element,
  React.createElement("h1", {}, "Hola, soy Richard"),
  React.createElement("p", {}, "Soy Ingeniero de la web")
);

const container = document.getElementById("app");

// 2 Argumentos, que, y donde
// ReactDOM.render(element, container);
ReactDOM.render(jsx, container);
