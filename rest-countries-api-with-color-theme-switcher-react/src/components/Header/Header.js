import './Header.scss';
import ThemeSwitch from '../ThemeSwitch/ThemeSwitch';

function Header() {
  return (
    <header className='header-wrapper'>
      <h2 className='header-title'>Where in the world?</h2>
      <ThemeSwitch />
    </header>
  );
}

export default Header;
