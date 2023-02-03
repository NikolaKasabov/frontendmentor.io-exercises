import classes from './FormCompleted.module.css';

import logo from '../../images/icon-thank-you.svg';

function FormCompleted() {
  return (
    <div className={classes.wrapper}>
      <img src={logo} alt="icon" className={classes.logo} />
      <h2 className={classes.title}>Thank you!</h2>
      <p className={classes.text}>Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com.</p>
    </div>
  );
}

export default FormCompleted;
