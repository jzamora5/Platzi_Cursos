import React from "react";
import { hydrateRoot } from "react-dom/client";
import { App } from "./containers/App";
import { BrowserRouter } from "react-router-dom";
import "./assets/favicon.ico";

const container = document.getElementById("app");

const initialProps = window.__INITIAL_PROPS__;

console.log("initialProps", initialProps);

hydrateRoot(
  container,
  <BrowserRouter>
    <App {...initialProps} />
  </BrowserRouter>
);
