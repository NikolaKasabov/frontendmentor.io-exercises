import './TypeSelect.scss';
import triangle from '../../images/bg-triangle.svg';
import Badge from '../Badge/Badge';

function TypeSelect({ onTypeSelect }) {
  return (
    <div className="type-select">
      <div className="type-select--container">
        <img src={triangle} alt="triangle" className='type-select--triangle' />

        <div className="type-select--badge-wrapper type-select--badge-wrapper1">
          <Badge type='paper' onClick={onTypeSelect} />
        </div>
        <div className="type-select--badge-wrapper type-select--badge-wrapper2">
          <Badge type='scissors' onClick={onTypeSelect} />
        </div>
        <div className="type-select--badge-wrapper type-select--badge-wrapper3">
          <Badge type='rock' onClick={onTypeSelect} />
        </div>
      </div>
    </div>
  );
}

export default TypeSelect;
