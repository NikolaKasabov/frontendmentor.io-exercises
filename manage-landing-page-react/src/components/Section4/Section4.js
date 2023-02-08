import Button from '../Button/Button';
import classes from './Section4.module.css';

function Section4() {
  return (
    <section className={classes.wrapper}>
      <div className={classes.innerWrapper}>
        <h2 className={classes.title}>Simplify how your team works today.</h2>
        <Button type='secondary'>Get Started</Button>
      </div>
    </section>
  );
}

export default Section4;
