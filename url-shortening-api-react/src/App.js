import './App.scss';
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
    </div>
  );
}

export default App;
