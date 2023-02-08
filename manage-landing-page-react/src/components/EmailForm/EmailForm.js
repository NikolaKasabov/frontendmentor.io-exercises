import { useState } from 'react';
import Button from '../Button/Button';
import classes from './EmailForm.module.css';

const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

function EmailForm({className}) {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  function submitHandler(ev) {
    ev.preventDefault();
    if (!emailRegex.test(email)) {
      setError('Please insert a valid email');
    } else {
      setError('');
      setEmail('');
    }
  }

  return (
    <form onSubmit={submitHandler} className={`${classes.wrapper} ${className ? className : ''}`}>
      <div className={classes.formControl}>
        <input type="text"
          className={`${classes.input} ${error ? classes.error : ''}`}
          value={email}
          onChange={ev => setEmail(ev.target.value)}
        />
        {error && <div className={classes.errorMessage}>{error}</div>}
      </div>
      <Button type='primary'>Go</Button>
    </form>
  );
}

export default EmailForm;
