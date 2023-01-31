import Button from '../Button/Button';
import RadioInput from '../Inputs/RadioInput';
import Switch from '../Inputs/Switch';
import classes from './FormStep2.module.css';
import iconArcade from '../../images/icon-arcade.svg';
import iconAdvanced from '../../images/icon-advanced.svg';
import iconPro from '../../images/icon-pro.svg';

function FormStep2({ formValues, onInputChange, setActiveStep }) {
  
  function clickPrevHandler() {
    setActiveStep(prev => prev - 1);
  }

  function clickNextHandler() {
    setActiveStep(prev => prev + 1);
  }

  return (
    <div className={classes.wrapper}>
      <div className={classes.radioInputs}>
        <RadioInput
          name='plan'
          value='arcade'
          onChange={onInputChange}
          isChecked={formValues.plan === 'arcade'}
        >
          <div className={classes.radioInputContent}>
            <img src={iconArcade} alt="icon" />
            <div>
              <h3 className={classes.radioInputTitle}>Arcade</h3>
              <p className={classes.radioInputPrice}>$9/mo</p>
              {formValues.isYearly && <p className={classes.radioInputText}>2 months free</p>}
            </div>
          </div>
        </RadioInput>
        <RadioInput
          name='plan'
          value='advanced'
          onChange={onInputChange}
          isChecked={formValues.plan === 'advanced'}
        >
          <div className={classes.radioInputContent}>
            <img src={iconAdvanced} alt="icon" />
            <div>
              <h3 className={classes.radioInputTitle}>Advanced</h3>
              <p className={classes.radioInputPrice}>$12/mo</p>
              {formValues.isYearly && <p className={classes.radioInputText}>2 months free</p>}
            </div>
          </div>
        </RadioInput>
        <RadioInput
          name='plan'
          value='pro'
          onChange={onInputChange}
          isChecked={formValues.plan === 'pro'}
        >
          <div className={classes.radioInputContent}>
            <img src={iconPro} alt="icon" />
            <div>
              <h3 className={classes.radioInputTitle}>Pro</h3>
              <p className={classes.radioInputPrice}>$15/mo</p>
              {formValues.isYearly && <p className={classes.radioInputText}>2 months free</p>}
            </div>
          </div>
        </RadioInput>
      </div>

      <Switch className={classes.switch}
        name='isYearly'
        onChange={onInputChange}
        isChecked={formValues.isYearly}
      />

      <div className={classes.buttonsContainer}>
        <Button type='secondary' onClick={clickPrevHandler}>Go Back</Button>
        <Button type='primary' onClick={clickNextHandler}>Next Step</Button>
      </div>
    </div>
  );
}

export default FormStep2;
