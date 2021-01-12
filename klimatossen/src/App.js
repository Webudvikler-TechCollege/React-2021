import './App.scss';
import Header from './components/Partials/Header';
import Footer from './components/Partials/Footer';
import Section from './components/Elements/Section/Section';

const arrSections = [
  {id: 1, header: 'HVAD ER CO2?', class: 'box-brown', image: 'Icon-CO2.png'},
  {id: 2, header: 'KLIMA OG MILJØ?', class: 'box-blue', image: 'Icon-Climate.png'},
  {id: 3, header: 'HVORDAN KAN JEG BIDRAGE?', class: 'box-green', image: 'Icon-Checklist.png'},
  {id: 4, header: 'DELTAG I ARRANGEMENT', class: 'box-red', image: 'Icon-Arrangement.png'}
]

function App() {
  return (
    <div className="App">
      <Header />
      <main>
      {arrSections.map((obj, key) => {
        return (
          <Section key={obj.id} data={obj}></Section>
        )
        })
      }
      </main>
      <Footer />
    </div>
  );
}

export default App;
