import './App.css';
import { Header } from './components/partials/Header';
import { Footer } from './components/partials/Footer';
import { useState } from 'react';

function App() {
  const [keyword, setKeyword] = useState('');

  console.log(keyword);

  return (
    <div>
      <Header title="Component Example" subtitle="Min første app" />
      <main>
        <input type="text" name="keyword" value={keyword} onChange={(e) => setKeyword(e.target.value)} />  
      </main>
      <Footer displayHistoryLink={true} />
    </div>
  );
}

export default App;