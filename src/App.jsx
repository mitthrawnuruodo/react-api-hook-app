import { Routes, Route, Link } from 'react-router';
import CharacterList from './components/CharacterList';
import CharacterDetails from './components/CharacterDetails';

const App = () => {
  return (
    <div>
      <header>
        <h1>Rick and Morty Characters</h1>
        <nav>
          <Link to="/">Home</Link>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<CharacterList />} />
          <Route path="/character/:id" element={<CharacterDetails />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;