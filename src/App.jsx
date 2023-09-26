
import './App.css'
import Faq from './components/faq/Faq';
import { Footer} from './components/footer/Footer';
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
      <Footer/>
    </>
  );
}

export default App
