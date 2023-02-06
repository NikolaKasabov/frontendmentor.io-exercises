import classes from './Button.module.css';

// type = primary | secondary
function Button({ type, children, onClick, className }) {
  return (
    <button className={`${className} ${classes.wrapper} ${type ? classes[type] : ''}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
