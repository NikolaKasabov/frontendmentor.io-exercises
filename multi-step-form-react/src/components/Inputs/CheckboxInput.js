import classes from './CheckboxInput.module.css';

function CheckboxInput({ name, title, text, price, onChange, isChecked }) {
  console.log(classes);
  return (
    <label className={`${classes.label} ${isChecked ? classes.checked : ''}`}>
      <input type="checkbox"
        className={classes.input}
        name={name}
        onChange={onChange}
        checked={isChecked}
      />
      <div className={classes.textContainer}>
        <h3 className={classes.title}>{title}</h3>
        <p className={classes.text}>{text}</p>
      </div>
      <p className={classes.price}>{price}</p>
    </label>
  );
}

export default CheckboxInput;
