import './App.scss';
import { useEffect, useState } from 'react';
import useFetch from './useFetch';
import { HiArrowNarrowLeft } from "react-icons/hi";
import Header from './components/Header/Header';
import Cards from './components/Cards/Cards';
import RegionSelect from './components/RegionSelect/RegionSelect';
import Search from './components/Search/Search';
import Loader from './components/Loader/Loader';
import CountryDetails from './components/CountryDetails/CountryDetails';


function App() {
  const { data, fetchData, isLoading } = useFetch();
  const [filteredData, setFilteredData] = useState(data);
  const [selectedRegion, setSelectedRegion] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCountry, setSelectedCountry] = useState(null);

  useEffect(() => {
    fetchData('https://restcountries.com/v3.1/all');
  }, [fetchData]);

  useEffect(() => {
    setFilteredData(data);
  }, [data]);

  // Filter data on filters change
  useEffect(() => {
    let newData = data;

    // Filter by region selection
    if (selectedRegion.toLowerCase() !== 'all') {
      newData = data.filter(el => el.region.toLowerCase() === selectedRegion);
    }

    // Filter by search
    if (searchTerm) {
      newData = newData.filter(el => el.name?.common.toLowerCase().includes(searchTerm.toLowerCase()));
    }

    setFilteredData(newData);
  }, [selectedRegion, searchTerm]);

  function onCardClick(country) {
    setSelectedCountry(country);
  }

  return (
    <div className="App">
      {isLoading && <Loader />}

      <Header />

      {selectedCountry
        ? (
          <section className="country-details-container">
            <button className='clear-selected-country-btn' onClick={() => setSelectedCountry(null)}>
              <HiArrowNarrowLeft className='clear-btn-icon' /> Back
            </button>
              <CountryDetails country={selectedCountry} />
            </section>
        ) : (
          <>
            <section className="filters-container">
              <Search value={searchTerm}
                onChange={ev => setSearchTerm(ev.target.value)}
                onClear={() => setSearchTerm('')}
              />
              <RegionSelect onChange={ev => setSelectedRegion(ev.target.value)} />
            </section>

            {filteredData && (
              <section className="cards-container">
                <Cards data={filteredData} onCardClick={onCardClick} />
              </section>
            )}
          </>
        )
      }
    </div>
  );
}

export default App;
