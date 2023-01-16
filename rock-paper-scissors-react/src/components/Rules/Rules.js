import './Rules.scss';
import rulesImg from '../../images/image-rules.svg';
import close from '../../images/icon-close.svg';

function Rules({onCloseClick}) {
  return (
    <div className="rules">
      <h2 className='rules-title'>rules</h2>
      <button className='rules-btn' onClick={onCloseClick}>
        <img src={close} alt="close" />
      </button>
      <img src={rulesImg} alt="rules" className='rules-img' />
    </div>
  );
}

export default Rules;
