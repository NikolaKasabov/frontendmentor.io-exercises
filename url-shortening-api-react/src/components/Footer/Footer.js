import './Footer.scss';
import logo from '../../images/logo-white.svg';
import { AiFillFacebook, AiOutlineTwitter, AiOutlineInstagram } from "react-icons/ai";
import { BsPinterest } from "react-icons/bs";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-wrapper">
        <div className="footer-logo-wrapper">
          <img src={logo} alt="logo" className='footer-logo' />
        </div>

        <div className="footer-links">
          <h4>Features</h4>
          <ul>
            <li><a href="#">Link Shortening</a></li>
            <li><a href="#">Branded Links</a></li>
            <li><a href="#">Analytics</a></li>
          </ul>
        </div>

        <div className="footer-links">
          <h4>Resources</h4>
          <ul>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Developers</a></li>
            <li><a href="#">Support</a></li>
          </ul>
        </div>

        <div className="footer-links">
          <h4>Company</h4>
          <ul>
            <li><a href="#">About</a></li>
            <li><a href="#">Our Team</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>

        <div className="footer-icons">
          <AiFillFacebook className='footer-icon' />
          <AiOutlineTwitter className='footer-icon' />
          <BsPinterest className='footer-icon pinterest' />
          <AiOutlineInstagram className='footer-icon' />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
