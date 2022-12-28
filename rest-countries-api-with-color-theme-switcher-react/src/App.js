import './App.scss';
import { useEffect, useState } from 'react';
import useFetch from './useFetch';
import Header from './components/Header/Header';
import Cards from './components/Cards/Cards';
import RegionSelect from './components/RegionSelect/RegionSelect';


function App() {
  const { data, fetchData, isLoading } = useFetch();
  const [filteredData, setFilteredData] = useState(data);
  const [selectedRegion, setSelectedRegion] = useState('all');

  useEffect(() => {
    fetchData('https://restcountries.com/v3.1/all');
  }, [fetchData]);

  useEffect(() => {
    setFilteredData(data);
  }, [data]);

  useEffect(() => {
    let newData = data;

    if (selectedRegion.toLowerCase() !== 'all') {
      newData = data.filter(el => el.region.toLowerCase() === selectedRegion);
    }

    setFilteredData(newData);

  }, [selectedRegion]);

  return (
    <div className="App">
      <Header />

      <section className="filters-wrapper">
        <RegionSelect onChange={ev => setSelectedRegion(ev.target.value)} />
      </section>

      {isLoading && 'Loading...'}
      {filteredData && (
        <section className="cards-container">
          <Cards data={filteredData} />
        </section>
      )}
    </div>
  );
}

export default App;
