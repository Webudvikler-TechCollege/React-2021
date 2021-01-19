import './App.scss';
import { Header } from './components/Partials/Header/Header';
import { Footer } from './components/Partials/Footer/Footer';
import { Nav } from './components/Partials/Nav/Nav';


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
