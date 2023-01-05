import './Header.scss';
import logo from '../../images/logo-bookmark.svg';
import Nav from '../Nav/Nav';

export default function Header() {

  return (
    <header className="header">
      <img src={logo} alt="logo" className='header-logo' />
      <Nav />
    </header>
  );
}
