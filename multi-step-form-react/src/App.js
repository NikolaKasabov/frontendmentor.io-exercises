import { useState } from 'react';
import './App.scss';
import FormStep1 from './components/FormSteps/FormStep1';
import Steps from './components/Steps/Steps';

const steps = [
  {
    number: 1,
    title: 'Step 1',
    text: 'Your info',
  },
  {
    number: 2,
    title: 'Step 2',
    text: 'Select plan',
  },
  {
    number: 3,
    title: 'Step 3',
    text: 'Add-ons',
  },
  {
    number: 4,
    title: 'Step 4',
    text: 'Summary',
  },
];

const formSteps = [
  {
    title: 'Personal info',
    text: 'Please provide your name, email address, and phone number.',
    getComponent: (formValues, onInputChange) => (
      <FormStep1 formValues={formValues} onInputChange={onInputChange} />
    ),
  },
  {
    title: 'Select your plan',
    text: 'You have the option of monthly or yearly billing.',
    getComponent: (formValues, onInputChange) => (
      <FormStep1 formValues={formValues} onInputChange={onInputChange} />
    ),
  },
  {
    title: 'Pick add-ons',
    text: 'Add-ons help enhance your gaming experience.',
    getComponent: (formValues, onInputChange) => (
      <FormStep1 formValues={formValues} onInputChange={onInputChange} />
    ),
  },
  {
    title: 'Finishing up',
    text: 'Double-check everything looks OK before confirming.',
    getComponent: (formValues, onInputChange) => (
      <FormStep1 formValues={formValues} onInputChange={onInputChange} />
    ),
  },
];

function App() {
  const [activeStep, setActiveStep] = useState(1);
  const [formValues, setFormValues] = useState({});

  function inputChangeHandler(ev) {
    const name = ev.target.name;
    const value = ev.target.value;
    console.log(name, value);

    setFormValues(prev => (
      {
        ...prev,
        [name]: value,
      }
    ));
  }

  return (
    <div className="app">
      <div className="app--container">
        <Steps steps={steps} activeStep={activeStep} />

        <div className="app--form-step-container">
          <h2 className='app--form-step-title'>{formSteps[activeStep - 1].title}</h2>
          <p className='app--form-step-text'>{formSteps[activeStep - 1].text}</p>
          {formSteps[activeStep - 1].getComponent(formValues, inputChangeHandler)}
        </div>
      </div>
    </div>
  );
}

export default App;
