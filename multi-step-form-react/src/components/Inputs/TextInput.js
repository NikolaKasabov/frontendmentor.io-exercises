import { nanoid } from 'nanoid';

import './TextInput.scss';

function TextInput({ name, value, placeholder, label, onChange }) {
  const id = nanoid();


  return (
    <div className="text-input">
      <div className="text-input--label-container">
        <label htmlFor={id} className='text-input--label'>{label}</label>
        <div className="text-input--error-message">This field is required</div>
      </div>

      <input id={id}
        type="text"
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        className='text-input--input'
      />
    </div>
  );
}

export default TextInput;
