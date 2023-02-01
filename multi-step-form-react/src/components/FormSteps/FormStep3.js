import Button from '../Button/Button';
import CheckboxInput from '../Inputs/CheckboxInput';
import classes from './FormStep3.module.css';

function FormStep3({ formValues, onInputChange, setActiveStep }) {
  
  function clickPrevHandler() {
    setActiveStep(prev => prev - 1);
  }

  function clickNextHandler() {
    setActiveStep(prev => prev + 1);
  }

  return (
    <div className={classes.wrapper}>
      <div className={classes.inputsWrapper}>
        <CheckboxInput
          name='onlineService'
          title='Online Service'
          text='Access to multiplayer games'
          price={`${formValues.isYearly ? '+$10/yr' : '+$1/mo'}`}
          onChange={onInputChange}
          isChecked={formValues.onlineService}
        />
        <CheckboxInput
          name='largerStorage'
          title='Larger storage'
          text='Extra 1TB of cloud save'
          price={`${formValues.isYearly ? '+$20/yr' : '+$2/mo'}`}
          onChange={onInputChange}
          isChecked={formValues.largerStorage}
        />
        <CheckboxInput
          name='customizableProfile'
          title='Customizable Profile'
          text='Custom theme on your profile'
          price={`${formValues.isYearly ? '+$20/yr' : '+$2/mo'}`}
          onChange={onInputChange}
          isChecked={formValues.customizableProfile}
        />
      </div>

      <div className={classes.buttonsContainer}>
        <Button type='secondary' onClick={clickPrevHandler}>Go Back</Button>
        <Button type='primary' onClick={clickNextHandler}>Next Step</Button>
      </div>
    </div>
  );
}

export default FormStep3;
