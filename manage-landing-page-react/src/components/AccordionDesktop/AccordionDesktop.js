import Card from '../Card/Card';
import classes from './AccordionDesktop.module.css';

function AccordionDesktop({ data }) {
  return (
    <div className={classes.wrapper}>
      {data.map(el => (
        <div key={el.id}>
          <Card
            image={el.image}
            name={el.name}
            text={el.text}
          />
        </div>
      ))}
    </div>
  );
}

export default AccordionDesktop;
