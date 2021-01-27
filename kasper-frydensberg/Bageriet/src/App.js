import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { Navigation } from "./components/Navigation/Navigation";
import { ContactPage } from "./pages/ContactPage/ContactPage";
import { FrontPage } from "./pages/FrontPage/Frontpage";
import { LoginPage } from "./pages/LoginPage/LoginPage";
import { ProductPage } from "./pages/ProductPage/ProductPage";

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
        <Route path="/home">
          <FrontPage />
        </Route>

        <Route path="/products">
          <ProductPage/>
        </Route>

        <Route path="/contact">
          <ContactPage/>
        </Route>
        
        <Route path="/login">
          <LoginPage/>
        </Route>

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
