import './App.scss';
import Contact from './components/Contact/Contact';
import Extension from './components/Extension/Extension';
import Faq from './components/Faq/Faq';
import Features from './components/Features/Features';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Features />
      <Extension />
      <Faq />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
