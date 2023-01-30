import Switch from '../Inputs/Switch';
import classes from './FormStep2.module.css';

function FormStep2({ formValues, onInputChange, setActiveStep }) {

  return (
    <div className={classes.wrapper}>
      <Switch name='isYearly'
        onChange={onInputChange}
        isChecked={formValues.isYearly}
      />
    </div>
  );
}

export default FormStep2;
