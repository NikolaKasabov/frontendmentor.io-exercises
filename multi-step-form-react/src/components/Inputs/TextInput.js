import { nanoid } from 'nanoid';

import './TextInput.scss';

function TextInput({ type, name, value, placeholder, label, onChange, hasError }) {
  const id = nanoid();

  return (
    <div className={`text-input ${hasError ? 'error' : ''}`}>
      <div className="text-input--label-container">
        <label htmlFor={id} className='text-input--label'>{label}</label>
        {hasError && <div className="text-input--error-message">This field is required</div>}
      </div>

      <input id={id}
        type={type}
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
