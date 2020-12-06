import './App.css';
import Test from './Test';
import RegistrarArticulo from './RegistrarArticulo';
import RegistrarPromocion from './RegistrarPromocion';
import BusquedaCliente from './BusquedaCliente';
import VistaArticulos from './VistaArticulos';
import BusquedaArticulo from './BusquedaArticulo';
import BusquedaClientexProducto from './BusquedaClientexProducto';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/Test">
          <Test />
        </Route>
        <Route path="/RegistrarArticulo">
          <RegistrarArticulo />
        </Route>
        <Route path="/RegistrarPromocion">
          <RegistrarPromocion />
        </Route>
        <Route path="/BusquedaCliente">
          <BusquedaCliente />
        </Route>
        <Route path="/VistaArticulos">
          <VistaArticulos />
        </Route>
        <Route path="/BusquedaArticulo">
          <BusquedaArticulo />
        </Route>
        <Route path="/BusquedaClientexProducto">
          <BusquedaClientexProducto />
        </Route>
        <Route path="/">
          <Test />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
