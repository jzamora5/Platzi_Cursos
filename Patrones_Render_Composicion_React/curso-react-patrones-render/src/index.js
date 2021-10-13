import React from "react";
import ReactDOM from "react-dom";
// import App from './App/index.js';
import "./index.css";

function App(props) {
  return (
    <h1>
      ¡{props.saludo}, {props.nombre}!
    </h1>
  );
}

function withSaludo(saludo) {
  return function WrappedComponentWithSaludo(WrappedComponent) {
    return function ComponenteDeVerdad(props) {
      return (
        <React.Fragment>
          <WrappedComponent {...props} saludo={saludo} />
          <p>Estamos acompañando al WrappedComponent</p>
        </React.Fragment>
      );
    };
  };
}

const AppWithSaludo = withSaludo("Hi")(App);

ReactDOM.render(
  // <App saludo="Buenas" nombre="Nath" />,
  <AppWithSaludo nombre="Nath" />,
  document.getElementById("root")
);
