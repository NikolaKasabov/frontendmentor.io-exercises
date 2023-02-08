import { useContext, useEffect } from 'react';
import classes from './App.module.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Section1 from './components/Section1/Section1';
import Section2 from './components/Section2/Section2';
import Section3 from './components/Section3/Section3';
import Section4 from './components/Section4/Section4';
import { widthContext } from './store/widthContext';

function App() {
  const { setWidth } = useContext(widthContext);

  useEffect(() => {
    function resizeEventListener() {
      setWidth(window.innerWidth);
    }

    resizeEventListener();
    window.addEventListener('resize', resizeEventListener);

    return () => {
      window.removeEventListener('resize', resizeEventListener);
    }
  }, []);

  return (
    <div className={classes.wrapper}>
      <Header />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Footer />
    </div>
  );
}

export default App;
