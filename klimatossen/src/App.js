import './App.scss';
import Header from './components/Partials/Header';
import Footer from './components/Partials/Footer';
import Section from './components/Elements/Section/Section';

const arrSections = [
  {header: 'HVAD ER CO2?', image: 'Icon-CO2.png'},
  {header: 'KLIMA OG MILJØ?', image: 'Icon-Climate.png'},
  {header: 'HVORDAN KAN JEG BIDRAGE?', image: 'Icon-Checklist.png'},
  {header: 'DELTAG I ARRANGEMENT', image: 'Icon-Arrangement.png'}
]

function App() {
  return (
    <div className="App">
      <Header />
      <main>
      {arrSections.map((obj, key) => {
        return (
          <Section header={obj.header} image={obj.image} key={key} id={key}></Section>
        )
        })
      }
      </main>
      <Footer />
    </div>
  );
}

export default App;
