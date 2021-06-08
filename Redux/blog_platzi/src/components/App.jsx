import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Menu from './Menu';
import Usuarios from './Usuarios';
import Publicaciones from './Publicaciones';
import Tareas from './Tareas';
import TareasGuardar from './Tareas/Guardar';

const App = () => (
  <BrowserRouter>
    <Menu />
    <div className="margen">
      <Switch>
        <Route exact path="/" component={Usuarios}></Route>
        <Route exact path="/tareas" component={Tareas}></Route>
        <Route exact path="/tareas/guardar" component={TareasGuardar}></Route>
        <Route
          exact
          path="/publicaciones/:key"
          component={Publicaciones}
        ></Route>
      </Switch>
    </div>
  </BrowserRouter>
);

export default App;
