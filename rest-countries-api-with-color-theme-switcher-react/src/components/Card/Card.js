import './Card.scss';

function Card({ flag, name, population, region, capital }) {
  
  return (
    <div className="card-wrapper">
      <img className='card-img' src={flag} alt="flag" />
      <div className="card-info">
        <h4 className="card-title">{name}</h4>
        <div className='card-details'>
          <div><span>Population: </span>{population.toLocaleString('en-US')}</div>
          <div><span>Region: </span>{region}</div>
          {capital && <div><span>Capital: </span>{capital}</div>}
        </div>
      </div>
    </div>
  );
}

export default Card;
