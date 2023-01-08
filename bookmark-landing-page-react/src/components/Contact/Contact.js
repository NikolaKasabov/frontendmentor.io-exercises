import { useState } from 'react';
import './Contact.scss';
import icon from '../../images/icon-error.svg';

const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export default function Contact() {
  const [email, setEmail] = useState('');
  const [hasError, setHasError] = useState(false);

  function submitHandler(ev) {
    ev.preventDefault();
    const isValidEmail = emailRegex.test(email);
    setHasError(!isValidEmail);
    if (isValidEmail) {
      setEmail('');
    }
  }

  return (
    <div className="contact">
      <p className='contact-joined'>35,000+ already joined</p>
      <h2 className='contact-title'>Stay up-to-date with what we’re doing</h2>

      <form className='contact-form' onSubmit={submitHandler}>
        <div className={`contact-input-wrapper ${hasError ? 'has-error' : ''}`}>
          <input type="text" className='contact-input'
            placeholder='Enter your email address'
            value={email}
            onChange={ev => setEmail(ev.target.value)}
          />
          <img src={icon} alt="icon" className='contact-icon' />
          <div className="contact-error">Whoops, make sure it's an email.</div>
        </div>
        <button className='btn contact-btn'>Contact Us</button>
      </form>
    </div>
  );
}
