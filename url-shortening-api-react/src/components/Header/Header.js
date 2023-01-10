import './Header.scss';
import logo from '../../images/logo.svg';
import Nav from '../Nav/Nav';
function Header() {

  return (
    <header className='header'>
      <img src={logo} alt="logo" />
      <Nav />
    </header>
  );
}

export default Header;
