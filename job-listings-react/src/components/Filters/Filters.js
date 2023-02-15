import { nanoid } from 'nanoid';
import RemoveFilterTag from '../RemoveFilterTag/RemoveFilterTag';
import classes from './Filters.module.css';

function Filters({ filters, onRemoveFilter, onClearFilters }) {
  return (
    <div className={classes.wrapper}>
      <div className={classes.filtersWrapper}>
        {filters.map(filter => (
          <RemoveFilterTag key={nanoid()} onClick={() => onRemoveFilter(filter)}>
            {filter}
          </RemoveFilterTag>
        ))}
      </div>

      <button className={classes.clearBtn} onClick={onClearFilters}>
        Clear
      </button>
    </div>
  );
}

export default Filters;