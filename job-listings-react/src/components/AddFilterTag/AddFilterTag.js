import classes from './AddFilterTag.module.css';

function AddFilterTag({ children, onClick }) {
  return (
    <button className={classes.wrapper} onClick={onClick}>
      {children}
    </button>
  );
}

export default AddFilterTag;
