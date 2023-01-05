import { useState } from 'react';
import './Nav.scss';
import hamburger from '../../images/icon-hamburger.svg';
import logo from '../../images/logo-bookmark.svg';
import close from '../../images/icon-close.svg';
import facebook from '../../images/icon-facebook.svg';
import twitter from '../../images/icon-twitter.svg';

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  function closeNav() {
    setIsOpen(false);
  }

  function openNav() {
    setIsOpen(true);
  }

  return (
    <nav className="nav">
      <div className={`mobile-wrapper ${isOpen ? 'open' : ''}`}>
        <div className="inner-wrapper">
          <div className="logo-wrapper">
            <img src={logo} alt="logo" className='logo' />
            <button className='close-nav-btn' onClick={closeNav}>
              <img src={close} alt="close nav button" />
            </button>
          </div>
          <hr />
          <ul className='nav-links'>
            <li><a href="#" onClick={closeNav}>Features</a></li>
            <hr />
            <li><a href="#" onClick={closeNav}>Pricing</a></li>
            <hr />
            <li><a href="#" onClick={closeNav}>Contact</a></li>
            <hr />
            <li><a href="#" className='btn login-btn' onClick={closeNav}>Login</a></li>
          </ul>

          <div className="icons-container">
            <a href="#" onClick={closeNav}>
              <img src={facebook} alt="facebook" />
            </a>
            <a href="#" onClick={closeNav}>
              <img src={twitter} alt="twitter" />
            </a>
          </div>
        </div>
      </div>

      <button className="open-nav-btn" onClick={openNav}>
        <img src={hamburger} alt="open nav button" />
      </button>
    </nav>
  );
}
