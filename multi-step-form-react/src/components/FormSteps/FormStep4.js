import Button from '../Button/Button';
import classes from './FormStep4.module.css';

const taxStrings = {
  monthly: {
    arcade: '$9/mo',
    advanced: '$12/mo',
    pro: '$15/mo',
    onlineService: '+$1/mo',
    largerStorage: '+$2/mo',
    customizableProfile: '+$2/mo',
  },
  yearly: {
    arcade: '$90/yr',
    advanced: '$120/yr',
    pro: '$150/yr',
    onlineService: '+$10/yr',
    largerStorage: '+$20/yr',
    customizableProfile: '+$20/yr',
  }
};

function FormStep4({ formValues, setActiveStep, setFormValues }) {

  function getTotalPrice() {
    let totalPrice = 0;
    let result = '';

    if (!formValues.isYearly) {
      if (formValues.plan === 'arcade') {
        totalPrice += 9;
      } else if (formValues.plan === 'advanced') {
        totalPrice += 12;
      } else if (formValues.plan === 'pro') {
        totalPrice += 15;
      }

      if (formValues.onlineService) {
        totalPrice += 1;
      }
      if (formValues.largerStorage) {
        totalPrice += 2;
      }
      if (formValues.customizableProfile) {
        totalPrice += 2;
      }

      result = `$${totalPrice}/mo`;
    } else if (formValues.isYearly) {
      if (formValues.plan === 'arcade') {
        totalPrice += 90;
      } else if (formValues.plan === 'advanced') {
        totalPrice += 120;
      } else if (formValues.plan === 'pro') {
        totalPrice += 150;
      }

      if (formValues.onlineService) {
        totalPrice += 10;
      }
      if (formValues.largerStorage) {
        totalPrice += 20;
      }
      if (formValues.customizableProfile) {
        totalPrice += 20;
      }

      result = `$${totalPrice}/yr`;
    }

    return result;
  }

  function changeIsYearlyHandler() {
    setFormValues(prev => ({
      ...prev,
      isYearly: !prev.isYearly
    }));
  }

  function clickPrevHandler() {
    setActiveStep(prev => prev - 1);
  }

  function clickNextHandler() {
    setActiveStep(prev => prev + 1);
  }

  return (
    <div className={classes.wrapper}>
      <div className={classes.selectedServices}>
        <h3>
          <span>{formValues.plan} ({formValues.isYearly ? 'Yearly' : 'Monthly'})</span>
          <p>{taxStrings[formValues.isYearly ? 'yearly' : 'monthly'][formValues.plan]}</p>
        </h3>
        <button className={classes.changeIsYearly} onClick={changeIsYearlyHandler}>Change</button>
        {(formValues.onlineService || formValues.largerStorage || formValues.customizableProfile) && <div className={classes.line}></div>}
        {formValues.onlineService && (
          <div className={classes.addOn}>
            <p>Online Service</p>
            <p>{taxStrings[formValues.isYearly ? 'yearly' : 'monthly'].onlineService}</p>
          </div>
        )}
        {formValues.largerStorage && (
          <div className={classes.addOn}>
            <p>Larger Storage</p>
            <p>{taxStrings[formValues.isYearly ? 'yearly' : 'monthly'].largerStorage}</p>
          </div>
        )}
        {formValues.customizableProfile && (
          <div className={classes.addOn}>
            <p>Customizable Profile</p>
            <p>{taxStrings[formValues.isYearly ? 'yearly' : 'monthly'].customizableProfile}</p>
          </div>
        )}
      </div>

      <div className={classes.total}>
        <p>Total (per {formValues.isYearly ? 'year' : 'month'})</p>
        <p>{getTotalPrice()}</p>
      </div>

      <div className={classes.buttonsContainer}>
        <Button type='secondary' onClick={clickPrevHandler}>Go Back</Button>
        <Button type='confirm' onClick={clickNextHandler}>Confirm</Button>
      </div>
    </div>
  );
}

export default FormStep4;
