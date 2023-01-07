import { useRef } from 'react';
import { GrFormDown } from "react-icons/gr";
import './FaqTab.scss';

export default function FaqTab({ question, answer, isActive, onClick }) {
  const answerRef = useRef(null);
  const answerHeight = answerRef.current?.offsetHeight + 'px';

  return (
    <div className={`faq-tab ${isActive ? 'active' : ''}`} onClick={onClick}>
      <div className="faq-tab-question-wrapper">
        <div className="faq-tab-question">{question}</div>
        <GrFormDown className='faq-tab-icon' />
      </div>
      
      <div className="faq-tab-answer-wrapper"
        style={{ height: isActive ? answerHeight : '0px'}}
      >
        <p className="faq-tab-answer" ref={answerRef}>{answer}</p>
      </div>
    </div>
  );
}
