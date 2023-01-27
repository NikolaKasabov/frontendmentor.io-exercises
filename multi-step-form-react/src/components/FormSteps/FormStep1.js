import { useState } from 'react';
import './FormStep1.scss';
import Button from '../Button/Button';
import TextInput from '../Inputs/TextInput';

function FormStep1({ formValues, onInputChange, setActiveStep }) {
  const [errors, setErrors] = useState({
    name: false,
    email: false,
    phone: false,
  });

  function clickNextHandler() {
    const tempErrors = {
      name: false,
      email: false,
      phone: false,
    };

    if (formValues.name.trim() === '') {
      tempErrors.name = true;
    }
    if (formValues.email.trim() === '') {
      tempErrors.email = true;
    }
    if (formValues.phone.trim() === '') {
      tempErrors.phone = true;
    }

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
          hasError={errors.name}
        />
        <TextInput
          type='email'
          label='Email Address'
          name='email'
          placeholder='e.g. stephenking@lorem.com'
          onChange={onInputChange}
          value={formValues.email}
          hasError={errors.email}
        />
        <TextInput
          type='text'
          label='Phone Number'
          name='phone'
          placeholder='e.g. +1 234 567 890'
          onChange={onInputChange}
          value={formValues.phone}
          hasError={errors.phone}
        />
      </div>

      <div className="form-step-1--buttons-container">
        <Button type='primary' onClick={clickNextHandler}>Next Step</Button>
      </div>
    </div>
  );
}

export default FormStep1;
