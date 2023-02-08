import classes from './Footer.module.css';
import logo from '../../images/logo-white.svg';
import { AiFillFacebook, AiFillYoutube, AiOutlineTwitter, AiOutlineInstagram } from "react-icons/ai";
import { BsPinterest } from "react-icons/bs";
import EmailForm from '../EmailForm/EmailForm';

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={classes.wrapper}>
      <div className={classes.innerWrapper}>
        <div className={classes.item1}>
          <img src={logo} alt="logo" />
          <div className={classes.iconsWrapper}>
            <AiFillFacebook />
            <AiFillYoutube />
            <AiOutlineTwitter />
            <BsPinterest />
            <AiOutlineInstagram />
          </div>
        </div>

        <div className={classes.item2}>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Pricing</a></li>
            <li><a href="#">Products</a></li>
            <li><a href="#">About Us</a></li>
          </ul>
        </div>

        <div className={classes.item3}>
          <ul>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Community</a></li>
            <li><a href="#">Privacy Policy</a></li>
          </ul>
        </div>

        <div className={classes.item4}>
          <EmailForm className={classes.form} />
        </div>

        <div className={classes.item5}>
          <p>Copyright {year}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
