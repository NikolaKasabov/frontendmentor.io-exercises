import Button from '../Button/Button';

import classes from './Section1.module.css';
import image from '../../images/illustration-intro.svg';

function Section1() {
  return (
    <section className={classes.wrapper}>
      <div>
        <h1 className={classes.title}>Bring everyone together to build better products.</h1>
        <p className={classes.text}>Manage makes it simple for software teams to plan day-to-day tasks while keeping the larger team goals in view.</p>
        <Button type='primary' className={classes.btn}>Get Started</Button>
      </div>

      <div>
        <img src={image} alt="charts" className={classes.image} />
      </div>
    </section>
  );
}

export default Section1;
