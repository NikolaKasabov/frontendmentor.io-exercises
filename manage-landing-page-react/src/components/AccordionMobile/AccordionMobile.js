import { useState } from 'react';
import AccordionButton from '../AccordionButton/AccordionButton';
import Card from '../Card/Card';
import classes from './AccordionMobile.module.css';

function AccordionMobile({ data }) {
  const [activeIndex, setActiveIndex] = useState(0);

  function clickHandler(index) {
    setActiveIndex(index);
  }

  return (
    <div>
      <div className={classes.cardWrapper}>
        <Card
          image={data[activeIndex].image}
          name={data[activeIndex].name}
          text={data[activeIndex].text}
          isMobile={true}
        />
      </div>

      <div className={classes.buttonsContainer}>
        {data.map((el, index) => (
          <AccordionButton
            key={el.id}
            onClick={() => clickHandler(index)}
            isActive={activeIndex === index}
          />
        ))}
      </div>
    </div>
  );
}

export default AccordionMobile;
