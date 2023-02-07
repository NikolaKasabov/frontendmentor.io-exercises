import classes from './Card.module.css';

function Card({image, name, text, isMobile}) {
  return (
    <div className={`${classes.wrapper} ${isMobile ? classes.mobile : ''}`}>
      <img src={image} alt="avatar" />
      <h4>{name}</h4>
      <p>{text}</p>
    </div>
  );
}

export default Card;
