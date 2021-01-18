import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { Navigation } from "./components/navigation/Navigation";
import { Frontpage } from "./pages/frontpage/Frontpage";

// App indeholder:
// - Router som top-level component
// - Vores navigation component
// - Switch fra React-router-dom
// - Routes der peger på de stier vi laver i navigation og renderer de tilsvarende components

function App() {
  return (
    <Router>
      <Navigation />

      <Switch>
        <Route exact path="/home">
          <Frontpage />
        </Route>

        <Route exact path="/products"></Route>
        <Route exact path="/contact"></Route>
        <Route exact path="/login"></Route>

        <Route exact path="/">
          <Redirect to="/home" />
        </Route>

        <Route path="/">
          <h2>404 siden findes ikke....</h2>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
