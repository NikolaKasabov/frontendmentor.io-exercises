import './App.scss';
import { useEffect, useState } from 'react';
import useFetch from './useFetch';
import Header from './components/Header/Header';
import Cards from './components/Cards/Cards';
import RegionSelect from './components/RegionSelect/RegionSelect';
import Search from './components/Search/Search';


function App() {
  const { data, fetchData, isLoading } = useFetch();
  const [filteredData, setFilteredData] = useState(data);
  const [selectedRegion, setSelectedRegion] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

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

  return (
    <div className="App">
      <Header />

      <section className="filters-wrapper">
        <Search value={searchTerm}
          onChange={ev => setSearchTerm(ev.target.value)}
          onClear={() => setSearchTerm('')}
        />
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
