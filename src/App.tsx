import { Route, Routes } from 'react-router-dom';
import './App.scss';
import { Friends } from './pages/Friends';
import { Games } from './pages/Games';
import { Chess } from './pages/Games/Chess';
import { Main } from './pages/Main';
import { Messages } from './pages/Messages';
import { News } from './pages/News';
import { Products } from './pages/Products';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/friends" element={<Friends />} />
        <Route path="/news" element={<News />} />
        <Route path="/messages" element={<Messages />} />
        <Route path="/products" element={<Products />} />
        <Route path="/games" element={<Games />} />
        <Route path="/games/chess" element={<Chess />} />
      </Routes>
    </div>
  );
}

export default App;
