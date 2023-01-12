import './Header.scss';
import logo from '../../images/logo.svg';
import Nav from '../Nav/Nav';
function Header() {

  return (
    <header className='header'>
      <div>
        <img src={logo} alt="logo" />
      </div>
      <Nav />
    </header>
  );
}

export default Header;
