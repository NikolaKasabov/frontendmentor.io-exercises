import './App.scss';
import Boost from './components/Boost/Boost';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Statistics from './components/Statistics/Statistics';
import UrlShortening from './components/UrlShortening/UrlShortening';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <UrlShortening />
      <Statistics />
      <Boost />
      <Footer />
    </div>
  );
}

export default App;
