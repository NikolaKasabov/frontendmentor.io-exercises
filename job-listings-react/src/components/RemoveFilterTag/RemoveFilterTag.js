import classes from './RemoveFilterTag.module.css';
import icon from '../../images/icon-remove.svg';

function RemoveFilterTag({ children, onClick }) {
  return (
    <div className={classes.wrapper}>
      <p>{children}</p>
      <button onClick={onClick}>
        <img src={icon} alt="close icon" />
      </button>
    </div>
  );
}

export default RemoveFilterTag;
