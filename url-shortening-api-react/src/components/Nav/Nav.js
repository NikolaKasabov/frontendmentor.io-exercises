import './Nav.scss';
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from 'react';

function Nav() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  function openNav() {
    setIsMobileOpen(true);
  }

  function closeNav() {
    setIsMobileOpen(false);
  }

  return (
    <nav className="nav">
      <div className={`nav-overlay ${isMobileOpen ? 'open' : ''}`}
        onClick={closeNav}
      ></div>
      <ul className={`nav-links ${isMobileOpen ? 'open' : ''}`}>
        <li><a href='#' onClick={closeNav}>Features</a></li>
        <li><a href='#' onClick={closeNav}>Pricing</a></li>
        <li><a href='#' onClick={closeNav}>Resources</a></li>
        <div className="nav-line"></div>
        <li className='nav-login'><a href='#' onClick={closeNav}>Login</a></li>
        <li><a href='#' className='btn nav-sign-up' onClick={closeNav}>Sign Up</a></li>
      </ul>
      <button className='nav-open-btn' onClick={openNav}>
        <RxHamburgerMenu className='nav-open-btn-icon' />
      </button>
    </nav>
  );
}

export default Nav;
