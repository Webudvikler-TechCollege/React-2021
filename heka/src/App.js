import { useState, useEffect } from 'react';
import './App.scss';
import { 
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
 } from 'react-router-dom';
 import { HeaderFrontpage } from './components/Partials/HeaderFrontpage/HeaderFrontpage';
 import { Header } from './components/Partials/Header/Header';
 import { Main } from './components/Partials/Main/Main';
 import { Footer } from './components/Partials/Footer/Footer';
 import { Home } from './components/Pages/Home/Home';
 import { Products } from './components/Pages/Products/Products';
 import { Contact } from './components/Pages/Contact/Contact';
 import { Login } from './components/Pages/Login/Login';

function App() {

  const [loginData, setLoginData] = useState('');

  useEffect(() => {
    if(sessionStorage.getItem('token')) {
        setLoginData(JSON.parse(sessionStorage.getItem('token')))
    }
  }, [])  

  return (
    <Router>
      <Main>
      <Switch>
        <Route exact path="/home">
          <HeaderFrontpage />
          <Home />
        </Route>
        <Route path="/products">
          <Header loginData={loginData} setLoginData={setLoginData} />
          <Products loginData={loginData} setLoginData={setLoginData} />
        </Route>
        <Route exact path="/contact">
          <Header />
          <Contact />
        </Route>
        <Route exact path="/login">
          <Header />
          <Login loginData={loginData} setLoginData={setLoginData} />
        </Route>
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>
        <Route path="/">
          <h2>404: Siden fandtes ikke.</h2>
        </Route>
      </Switch>
      </Main>

      <Footer />
    </Router>
  );
}

export default App;
