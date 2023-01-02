import Card from '../Card/Card';
import './Cards.scss';

function Cards({ data, onCardClick }) {
  return (
    <div className={`cards-wrapper ${data.length < 4 ? 'few-elements' : ''}`}>
      {data.map(country => {
        return (
          <Card
            key={country?.name?.common}
            flag={country?.flags?.png}
            name={country?.name?.common}
            population={country?.population}
            region={country?.region}
            capital={country?.capital && country?.capital[0]}
            onClick={() => { onCardClick(country) }}
          />
        );
      })}
    </div>
  );
}

export default Cards;
