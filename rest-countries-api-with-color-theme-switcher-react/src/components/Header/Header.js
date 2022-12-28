import ThemeSwitch from '../ThemeSwitch/ThemeSwitch';
import './Header.scss';

function Header() {

  return (
    <header className='main-header'>
      <h2>Where in the world?</h2>
      <ThemeSwitch />
    </header>
  );
}

export default Header;
