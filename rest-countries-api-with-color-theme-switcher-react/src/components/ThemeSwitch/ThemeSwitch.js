import { useState, useEffect } from 'react';
import { BsMoon, BsSun } from "react-icons/bs";

import './ThemeSwitch.scss';

function ThemeSwitch() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  useEffect(() => {
    if (isDarkTheme) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkTheme]);

  function clickHandler() {
    setIsDarkTheme(old => !old);
  }

  return (
    <button onClick={clickHandler} className='theme-btn'>
      {isDarkTheme
        ? <><BsSun /> Light Theme</>
        : <><BsMoon /> Dark Theme</>}
    </button>
  );
}

export default ThemeSwitch;
