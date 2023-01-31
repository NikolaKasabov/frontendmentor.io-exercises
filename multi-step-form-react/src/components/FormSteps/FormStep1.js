import { useState } from 'react';
import './FormStep1.scss';
import Button from '../Button/Button';
import TextInput from '../Inputs/TextInput';

const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

function FormStep1({ formValues, onInputChange, setActiveStep }) {
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    phone: '',
  });

  function clickNextHandler() {
    const tempErrors = {
      name: '',
      email: '',
      phone: '',
    };

    // if (formValues.name.trim() === '') {
    //   tempErrors.name = 'This field is required';
    // }

    // if (formValues.email.trim() === '') {
    //   tempErrors.email = 'This field is required';
    // } else if (!emailRegex.test(formValues.email)) {
    //   tempErrors.email = 'Enter a valid email.';
    // }

    // if (formValues.phone.trim() === '') {
    //   tempErrors.phone = 'This field is required';
    // }

    setErrors(tempErrors);

    if (!tempErrors.name && !tempErrors.email && !tempErrors.phone) {
      setActiveStep(prev => prev + 1);
    }
  }

  return (
    <div className="form-step-1">
      <div className="form-step-1--inputs-container">
        <TextInput
          type='text'
          label='Name'
          name='name'
          placeholder='e.g. Stephen King'
          onChange={onInputChange}
          value={formValues.name}
          error={errors.name}
        />
        <TextInput
          type='email'
          label='Email Address'
          name='email'
          placeholder='e.g. stephenking@lorem.com'
          onChange={onInputChange}
          value={formValues.email}
          error={errors.email}
        />
        <TextInput
          type='text'
          label='Phone Number'
          name='phone'
          placeholder='e.g. +1 234 567 890'
          onChange={onInputChange}
          value={formValues.phone}
          error={errors.phone}
        />
      </div>

      <div className="form-step-1--buttons-container">
        <Button type='primary' onClick={clickNextHandler}>Next Step</Button>
      </div>
    </div>
  );
}

export default FormStep1;
