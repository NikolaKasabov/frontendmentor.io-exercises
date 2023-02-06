import { useEffect, useState } from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";

import classes from './Header.module.css';
import logo from '../../images/logo.svg';
import Button from '../Button/Button';
import Nav from '../Nav/Nav';

function Header() {
  const [isNavMobile, setIsNavMobile] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);

  useEffect(() => {
    function resizeEventListener() {
      if (window.innerWidth <= 800) {
        setIsNavMobile(true);
      } else {
        setIsNavMobile(false);
      }
    }

    resizeEventListener();
    window.addEventListener('resize', resizeEventListener);
    
    return () => {
      window.removeEventListener('resize', resizeEventListener);
    }
  }, []);

  function navClickHandler() {
    setIsNavOpen(false);
  }

  return (
    <header className={classes.wrapper}>
      <img src={logo} alt="logo" />
      <Nav type={`${isNavMobile ? 'mobile' : 'desktop'}`}
        isOpen={isNavOpen}
        onLinkClick={navClickHandler}
      />
      {!isNavMobile && <Button type='primary'>Get Started</Button>}
      {isNavMobile && (
        <button className={classes.navBtn}
          onClick={() => setIsNavOpen(prev => !prev)}
        >
          {isNavOpen ? <MdClose /> : < GiHamburgerMenu />}
        </button>
      )}
    </header>
  );
}

export default Header;
