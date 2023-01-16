import './Header.scss';
import logo from '../../images/logo.svg';

function Header({score}) {
  return (
    <div className="header">
      <img src={logo} alt="rock paper scissors" className='header--logo' />

      <div className="header--score">
        <h4 className='header--score-title'>score</h4>
        <p className='header--score-value'>{score}</p>
      </div>
    </div>
  );
}

export default Header;
