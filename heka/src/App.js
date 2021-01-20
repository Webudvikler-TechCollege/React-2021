import './App.scss';
import { 
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
 } from 'react-router-dom';
 import { Header } from './components/Partials/Header/Header';
 import { Main } from './components/Partials/Main/Main';
 import { Home } from './components/Pages/Home/Home';
 import { Products } from './components/Pages/Products/Products';
 import { Contact } from './components/Pages/Contact/Contact';
 import { Login } from './components/Pages/Login/Login';

function App() {
  return (
    <Router>
      <Header />

      <Main>
      <Switch>
        <Route exact path="/home">
          <Home />
        </Route>
        <Route exact path="/products">
          <Products />
        </Route>
        <Route exact path="/contact">
          <Contact />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/home"></Route>
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>
        <Route path="/">
          <h2>404: Siden fandtes ikke.</h2>
        </Route>
      </Switch>
      </Main>


    </Router>
  );
}

export default App;
