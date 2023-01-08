import './Footer.scss';
import logo from '../../images/logo-bookmark.svg';
import facebook from '../../images/icon-facebook.svg';
import twitter from '../../images/icon-twitter.svg';

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-container">
        <img src={logo} alt="logo" className='footer-logo' />
        <ul className="footer-links">
          <li><a href="#">Features</a></li>
          <li><a href="#">Pricing</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
        <div className="icons-container">
          <a href="#"><img src={facebook} alt="facebook" /></a>
          <a href="#"><img src={twitter} alt="twitter" /></a>
        </div>
      </div>
    </div>
  );
}
