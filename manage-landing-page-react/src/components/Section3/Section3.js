import { useContext } from 'react';
import classes from './Section3.module.css';
import image1 from '../../images/avatar-anisha.png';
import image2 from '../../images/avatar-ali.png';
import image3 from '../../images/avatar-richard.png';
import image4 from '../../images/avatar-shanai.png';
import { widthContext } from '../../store/widthContext';
import AccordionDesktop from '../AccordionDesktop/AccordionDesktop';
import AccordionMobile from '../AccordionMobile/AccordionMobile';
import Button from '../Button/Button';

const data = [
  {
    id: 1,
    image: image1,
    name: 'Anisha Li',
    text: '“Manage has supercharged our team’s workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated.”'
  },
  {
    id: 2,
    image: image2,
    name: 'Ali Bravo',
    text: '“We have been able to cancel so many other subscriptions since using Manage. There is no more cross-channel confusion and everyone is much more focused.”',
  },
  {
    id: 3,
    image: image3,
    name: 'Richard Watts',
    text: '“Manage allows us to provide structure and process. It keeps us organized and focused. I can’t stop recommending them to everyone I talk to!”',
  },
  {
    id: 4,
    image: image4,
    name: 'Shanai Gough',
    text: '“Their software allows us to track, manage and collaborate on our projects from anywhere. It keeps the whole team in-sync without being intrusive.”',
  },
];

function Section3() {
  const { width } = useContext(widthContext);

  return (
    <section className={classes.wrapper}>
      <h2 className={classes.title}>What they’ve said</h2>

      <div className={classes.accordionWrapper}>
        {width > 800
          ? <AccordionDesktop data={data} />
          : <AccordionMobile data={data} />
        }
      </div>

      <Button className={classes.btn} type='primary'>Get Started</Button>
    </section>
  );
}

export default Section3;
