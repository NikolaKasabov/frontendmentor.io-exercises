import Step from './Step';
import './Steps.scss';

function Steps({ steps, activeStep }) {
  return (
    <div className="steps">
      {steps.map(el => (
        <Step
          key={el.number}
          number={el.number}
          title={el.title}
          text={el.text}
          isActive={el.number === activeStep}
        />
      ))}
    </div>
  );
}

export default Steps;
