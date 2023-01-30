import { nanoid } from 'nanoid';
import classes from './Switch.module.css';

function Switch({name, onChange, isChecked}) {
  const id = nanoid();

  return (
    <div className={classes.wrapper}>
      <input type="checkbox"
        className={classes.input}
        name={name}
        id={id}
        onChange={onChange}
        checked={isChecked}
      />
      <p className={`${classes.text} ${isChecked ? '' : classes.highlight}`}>Monthly</p>
      <label htmlFor={id} className={classes.label}></label>
      <p className={`${classes.text} ${isChecked ? classes.highlight : ''}`}>Yearly</p>
    </div>
  );
}

export default Switch;
