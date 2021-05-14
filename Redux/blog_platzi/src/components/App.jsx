import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Menu from './Menu';
import Usuarios from './Usuarios';

const Tareas = () => <div>Tareas</div>;

const App = () => (
  <BrowserRouter>
    <Menu />
    <div className="margen">
      <Switch>
        <Route exact path="/" component={Usuarios}></Route>
        <Route exact path="/tareas" component={Tareas}></Route>
      </Switch>
    </div>
  </BrowserRouter>
);

export default App;
