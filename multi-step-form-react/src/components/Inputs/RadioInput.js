import { nanoid } from 'nanoid';
import classes from './RadioInput.module.css';

function RadioInput({ children, name, value, onChange, isChecked}) {
  const id = nanoid();

  return (
    <div className={classes.wrapper}>
      <input type="radio"
        className={classes.input}
        name={name}
        id={id}
        value={value}
        onChange={onChange}
        checked={isChecked}
      />
      <label htmlFor={id} className={classes.label}>
        {children}
      </label>
    </div>
  );
}

export default RadioInput;
