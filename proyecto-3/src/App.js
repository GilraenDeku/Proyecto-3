import './App.css';
import Test from './Test';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams,
} from "react-router-dom";

function App() {
  console.log("Entra al App");
  return (
    <Router>
      <Switch>
        <Route path="/Test">
          <Test />
        </Route>
        <Route path="/">
          <Test />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
