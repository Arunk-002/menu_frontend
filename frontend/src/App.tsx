
import './App.css'
import AboutBanner from './components/AboutBanner';
import ButtonBanner from './components/ButtonBanner';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import MenuPreview from './components/MenuPreview';

function App() {

  return (
    <>
     
      <Header />
      <Home />
      <ButtonBanner />
      <MenuPreview/>
      <AboutBanner />
      <Footer/>
    
    </>
  )
}

export default App
