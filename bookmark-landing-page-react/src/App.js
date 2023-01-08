import './App.scss';
import Contact from './components/Contact/Contact';
import Extension from './components/Extension/Extension';
import Faq from './components/Faq/Faq';
import Features from './components/Features/Features';
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
    </div>
  );
}

export default App;
