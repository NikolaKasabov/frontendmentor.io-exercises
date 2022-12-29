import { RxMagnifyingGlass } from "react-icons/rx";
import { AiOutlineCloseCircle } from "react-icons/ai";
import './Search.scss';

function Search({ value, onChange, onClear }) {
  return (
    <div className="search-wrapper">
      <input type="text"
        className='search-input'
        placeholder='Search for a country...'
        value={value}
        onChange={onChange}
      />
      <RxMagnifyingGlass className='search-icon' />
      <button className='search-clear-btn' onClick={onClear}>
        <AiOutlineCloseCircle className='search-clear-icon' />
      </button>
    </div>
  );
}

export default Search;
