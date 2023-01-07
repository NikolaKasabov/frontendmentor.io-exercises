import './App.scss';
import Extension from './components/Extension/Extension';
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
    </div>
  );
}

export default App;
