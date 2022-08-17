import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './Home';
import Driver from './components/Driver';
import './App.css';
import Modal from './components/Modal';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path={`/`} element={<Home />} />
        <Route path={`/drivers`} element={<Driver />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
