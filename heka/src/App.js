import './App.scss';
import Header from './components/Partials/Header';
import Footer from './components/Partials/Footer';
import Nav from './components/Partials/Nav';


function App() {
  return (
    <div className="App">
      <Header>
        <Nav></Nav>
      </Header>
      <main>
      </main>
      <Footer />
    </div>
  );
}

export default App;
