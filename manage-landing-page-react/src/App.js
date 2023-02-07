import classes from './App.module.css';
import Header from './components/Header/Header';
import Section1 from './components/Section1/Section1';
import Section2 from './components/Section2/Section2';

function App() {
  return (
    <div className={classes.wrapper}>
      <Header />
      <Section1 />
      <Section2 />
    </div>
  );
}

export default App;
