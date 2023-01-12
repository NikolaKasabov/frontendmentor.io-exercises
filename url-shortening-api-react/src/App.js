import './App.scss';
import Boost from './components/Boost/Boost';
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
    </div>
  );
}

export default App;
