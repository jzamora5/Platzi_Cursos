import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";

import "./global.css";
import App from "./components/App";

const container = document.getElementById("app");

// React DOM Recibe elementos <> por lo que el componente se debe encerrar
ReactDOM.render(<App />, container);
