import './App.scss';
import { 
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
 } from 'react-router-dom';
 import { Header } from './components/Partials/Header/Header';
 import { Home } from './components/Pages/Home/Home';

function App() {
  return (
    <Router>
      <Header />

      <Switch>
        <Route exact path="/home">
          <Home />
        </Route>
        <Route exact path="/products"></Route>
        <Route exact path="/contact"></Route>
        <Route exact path="/login"></Route>
        <Route exact path="/home"></Route>
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>
        <Route path="/">
          <h2>404: Siden fandtes ikke.</h2>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
