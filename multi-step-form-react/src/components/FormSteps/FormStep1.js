import TextInput from '../Inputs/TextInput';
import './FormStep1.scss';

function FormStep1({formValues, onInputChange}) {
  return (
    <div className="form-step-1">
      <TextInput
        label='Name'
        name='name'
        placeholder='e.g. Stephen King'
        onChange={onInputChange}
        value={formValues.name}
      />
    </div>
  );
}

export default FormStep1;
