
import './App.css'
import Faq from './components/faq/Faq';
import Hero from './components/hero/Hero';
import { NavbarDefault } from './components/navbar/NavBar';
import SwiperF from './components/slider/SwiperF';

function App() {
  

  return (
    <>
      <NavbarDefault/>
      <Hero/>
      <SwiperF/>
      <Faq/>
    </>
  );
}

export default App
