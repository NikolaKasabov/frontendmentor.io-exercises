import './Step.scss';

function Step({number, title, text, isActive}) {
  return (
    <div className={`step ${isActive ? 'active' : ''}`}>
      <div className="step--number">{number}</div>
      <div className="step--content">
        <h4>{title}</h4>
        <p>{text}</p>
      </div>
    </div>
  );
}

export default Step;
