import { Route, Routes } from 'react-router-dom';
import './App.scss';
import { MainLayout } from './Layouts/MainLayout';
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
      <MainLayout>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/friends" element={<Friends />} />
          <Route path="/news" element={<News />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/products" element={<Products />} />
          <Route path="/games" element={<Games />} />
          <Route path="/games/chess" element={<Chess />} />
        </Routes>
      </MainLayout>
    </div>
  );
}

export default App;
