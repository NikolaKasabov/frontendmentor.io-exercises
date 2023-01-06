import { useState } from 'react';
import './Features.scss';
import Tab from './Tab';
import TabContent from './TabContent';

import image1 from '../../images/illustration-features-tab-1.svg';
import image2 from '../../images/illustration-features-tab-2.svg';
import image3 from '../../images/illustration-features-tab-3.svg';

const data = [
  {
    id: 0,
    title: 'Simple Bookmarking',
    content: <TabContent
      image={image1}
      title='Bookmark in one click'
      text='Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.'
    />,
  },
  {
    id: 1,
    title: 'Speedy Searching',
    content: <TabContent
      image={image2}
      title='Intelligent search'
      text='Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.'
    />,
  },
  {
    id: 2,
    title: 'Easy Sharing',
    content: <TabContent
      image={image3}
      title='Share your bookmarks'
      text='Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.'
    />,
  },
];

export default function Features() {
  const [activeIndex, setActiveIndex] = useState(0);

  function tabClickHandler(index) {
    setActiveIndex(index);
  }

  return (
    <div className="features">
      <div className="features-wrapper">
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

      <div className="tab-content-wrapper">
        {data[activeIndex].content}
      </div>
    </div>
  );
}
