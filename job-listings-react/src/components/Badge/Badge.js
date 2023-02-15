import classes from './Badge.module.css';

function Badge({type = 'primary', children}) {
  return (
    <div className={`${classes.wrapper} ${classes[type]}`}>
      {children}
    </div>
  );
}

export default Badge;
