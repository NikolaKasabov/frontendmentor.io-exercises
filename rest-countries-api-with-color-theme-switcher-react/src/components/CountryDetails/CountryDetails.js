import './CountryDetails.scss';

function getCurrencies(country) {
  const currencies = [];
  if (country.currencies) {
    Object.values(country.currencies).forEach(obj => {
      currencies.push(obj.name);
    });
  }
  return currencies.join(', ');
}

function getLanguages(country) {
  const languages = [];
  if (country.languages) {
    Object.values(country.languages).forEach(str => {
      languages.push(str);
    });
  }
  return languages.join(', ');
}

function getNativeName(country) {
  let nativeName = '';
  if (country.name?.nativeName) {
    nativeName = Object.values(country.name?.nativeName)[0].common;
  }
  return nativeName;
}

function CountryDetails({ country }) {
  const nativeName = getNativeName(country);
  const currencies = getCurrencies(country);
  const languages = getLanguages(country);

  return (
    <div className="country-details-wrapper">
      <div className="image">
        <img src={country?.flags?.png} alt="" />
      </div>

      <div className="info">
        <h2 className='info-name'>{country?.name?.common}</h2>
        <div className="info-flex-container">
          <div className='info-flex-item'>
            {nativeName && <div><strong>Native Name: </strong>{nativeName}</div>}
            <div><strong>Population: </strong>{country?.population?.toLocaleString('en-US')}</div>
            <div><strong>Region: </strong>{country?.region}</div>
            {country?.subregion && <div><strong>Sub Region: </strong>{country?.subregion}</div>}
            {country?.capital && <div><strong>Languages: </strong>{country?.capital[0]}</div>}
          </div>

          <div className='info-flex-item'>
            {country?.tld && <div><strong>Top Level Domain: </strong>{country?.tld[0]}</div>}
            {currencies && <div><strong>Currencies: </strong>{currencies}</div>}
            {languages && <div><strong>Languages: </strong>{languages}</div>}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CountryDetails;
