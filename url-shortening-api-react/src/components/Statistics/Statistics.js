import React from 'react';
import './Statistics.scss';
import icon1 from '../../images/icon-brand-recognition.svg';
import icon2 from '../../images/icon-detailed-records.svg';
import icon3 from '../../images/icon-fully-customizable.svg';
import StatisticsCard from './StatisticsCard';

const data = [
  {
    id: 0,
    title: 'Brand Recognition',
    text: 'Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content.',
    icon: icon1,
  },
  {
    id: 1,
    title: 'Detailed Records',
    text: 'Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.',
    icon: icon2,
  },
  {
    id: 2,
    title: 'Fully Customizable',
    text: 'Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.',
    icon: icon3,
  },
];

function Statistics() {
  return (
    <div className="statistics">
      <h2 className="statistics-title">Advanced Statistics</h2>
      <p className="statistics-text">Track how your links are performing across the web with our advanced statistics dashboard.</p>

      <div className="statistics-cards-container">
        {data.map((el, index) => (
          <React.Fragment key={el.id}>
            {index > 0 && (
              <>
                <div className="horizontal-line"></div>
                <div className="vertical-line"></div>
              </>
            )}
            <StatisticsCard
              icon={el.icon}
              title={el.title}
              text={el.text}
            />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

export default Statistics;
