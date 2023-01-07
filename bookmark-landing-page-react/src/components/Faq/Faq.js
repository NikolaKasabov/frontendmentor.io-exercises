import { useState } from 'react';
import './Faq.scss';
import FaqTab from './FaqTab';

const data = [
  {
    id: 10,
    question: 'What is Bookmark?',
    answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt justo eget ultricies fringilla. Phasellus blandit ipsum quis quam ornare mattis.',
  },
  {
    id: 11,
    question: 'How can I request a new browser?',
    answer: 'Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdie tVivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet.',
  },
  {
    id: 12,
    question: 'Is there a mobile app?',
    answer: 'Sed consectetur quam id neque fermentum accumsan. Praesent luctus vestibulum dolor, ut condimentum urna vulputate eget. Cras in ligula quis est pharetra mattis sit amet pharetra purus. Sed sollicitudin ex et ultricies bibendum.',
  },
  {
    id: 13,
    question: 'What about other Chromium browsers?',
    answer: 'Integer condimentum ipsum id imperdiet finibus. Vivamus in placerat mi, at euismod dui. Aliquam vitae neque eget nisl gravida pellentesque non ut velit.',
  },
];

export default function Faq() {
  const [activeIndex, setActiveIndex] = useState(null);

  function faqTabClickHandler(index) {
    if (index === activeIndex) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  }

  return (
    <div className="faq">
      <h2>Frequently Asked Questions</h2>
      <p>Here are some of our FAQs. If you have any other questions you’d like answered please feel free to email us.</p>

      <div className="faq-questions-container">
        <div className="line"></div>
        {data.map(el => (
          <div key={el.id}>
            <FaqTab
              question={el.question}
              answer={el.answer}
              isActive={el.id === activeIndex}
              onClick={() => faqTabClickHandler(el.id)}
            />
            <div className="line"></div>
          </div>
        ))}
      </div>

      <button className='btn faq-btn'>More Info</button>
    </div>
  );
}
