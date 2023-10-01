
import './App.css'
import {Route, Routes} from 'react-router-dom'
import Home from './pages/Home';
import Pricing from './pages/Pricing';
import Trial from './pages/Trial';
import Reseller from './pages/Reseller';

function App() {
  

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/trial" element={<Trial />} />
        <Route path="/reseller" element={<Reseller/>}/>
      </Routes>
    </>
  );
}

export default App
