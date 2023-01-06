import './App.scss';
import Features from './components/Features/Features';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Features />
    </div>
  );
}

export default App;
