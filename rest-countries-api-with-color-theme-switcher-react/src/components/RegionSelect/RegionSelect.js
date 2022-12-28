import './RegionSelect.scss';

function RegionSelect({onChange}) {
  return (
    <select className='regionSelect-wrapper' onChange={onChange}>
      <option value='' disabled selected>Filter by Region</option>
      <option value='all'>All</option>
      <option value='africa'>Africa</option>
      <option value='americas'>Americas</option>
      <option value='asia'>Asia</option>
      <option value='europe'>Europe</option>
      <option value='oceania'>Oceania</option>
    </select>
  );
}

export default RegionSelect;
