import { useState } from 'react';
import './Features.scss';
import Tab from './Tab';

const data = [
  {
    id: 0,
    title: 'Simple Bookmarking',
  },
  {
    id: 1,
    title: 'Speedy Searching',
  },
  {
    id: 2,
    title: 'Easy Sharing',
  },
];

export default function Features() {
  const [activeIndex, setActiveIndex] = useState(0);

  function tabClickHandler(index) {
    setActiveIndex(index);
  }

  return (
    <div className="features">
      <h2 className='features-title'>Features</h2>
      <p className='features-text'>Our aim is to make it quick and easy for you to access your favourite websites. Your bookmarks sync between your devices so you can access them on the go.</p>

      <div className="tabs-container">
        {data.map(el => (
          <Tab
            key={el.id}
            title={el.title}
            onClick={() => tabClickHandler(el.id)}
            isActive={activeIndex === el.id}
          />
        ))}
      </div>
    </div>
  );
}
