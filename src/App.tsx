import { Route, Routes } from 'react-router-dom';
import './App.scss';
import { Main } from './pages/Main';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/friends" element={<Main />} />
        <Route path="/news" element={<Main />} />
      </Routes>
    </div>
  );
}

export default App;
