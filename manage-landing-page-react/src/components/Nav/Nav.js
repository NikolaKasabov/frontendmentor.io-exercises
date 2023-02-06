import classes from './Nav.module.css';

function Nav({type, isOpen, onLinkClick}) {
  return (
    <nav className={`${type === 'mobile' ? classes.mobile : ''} ${isOpen ? classes.open : ''}`}>
      <div className={classes.overlay} onClick={onLinkClick}></div>
      <ul className={classes.list}>
        <li><a href="#" onClick={onLinkClick}>Pricing</a></li>
        <li><a href="#" onClick={onLinkClick}>Product</a></li>
        <li><a href="#" onClick={onLinkClick}>About Us</a></li>
        <li><a href="#" onClick={onLinkClick}>Careers</a></li>
        <li><a href="#" onClick={onLinkClick}>Community</a></li>
      </ul>
    </nav>
  );
}

export default Nav;
