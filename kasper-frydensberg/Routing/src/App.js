import './App.css';
import { Navigation } from './components/Navigation';
import { Routes } from './routes/Routes'
// Vores navigtion ligger uden for switchen
// Switch "skifter" imellem routes vi definerer inden i
// Det første Route komponent peger på /forside og renderer Frontpage når den rammes

function App() {
  return (
    <div className="App">
      <Navigation/>
      <Routes/>
    </div>
  );
}

export default App;
