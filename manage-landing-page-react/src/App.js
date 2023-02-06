import classes from './App.module.css';
import Header from './components/Header/Header';
import Section1 from './components/Section1/Section1';

function App() {
  return (
    <div className={classes.wrapper}>
      <Header />
      <Section1 />
    </div>
  );
}

export default App;
