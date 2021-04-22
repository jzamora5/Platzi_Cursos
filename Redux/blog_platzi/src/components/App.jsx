import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Menu from "./Menu";
import Usuarios from "./Usuarios";

const Tareas = () => <div></div>;

const App = () => (
  <BrowserRouter>
    <Menu />
    <Switch>
      <Route exact path="/" component={Usuarios}></Route>
      <Route exact path="/tareas" component={Tareas}></Route>
    </Switch>
  </BrowserRouter>
);

export default App;
