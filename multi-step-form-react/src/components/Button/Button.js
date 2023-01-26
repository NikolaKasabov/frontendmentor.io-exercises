import './Button.scss';

// Types: primary | secondary | confirm
function Button({ type, children, onClick, className }) {
  return (
    <button className={`button-container ${className} ${type}`} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
