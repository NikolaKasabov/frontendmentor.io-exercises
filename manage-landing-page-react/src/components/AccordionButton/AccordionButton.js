import classes from './AccordionButton.module.css';

function AccordionButton({onClick, isActive}) {
  return (
    <button className={`${classes.wrapper} ${isActive ? classes.active : ''}`}
      onClick={onClick}
    ></button>
  );
}

export default AccordionButton;
