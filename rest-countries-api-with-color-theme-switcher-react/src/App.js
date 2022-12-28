import './App.scss';
import { useEffect, useState } from 'react';
import useFetch from './useFetch';
import Header from './components/Header/Header';
import Card from './components/Card/Card';
import Cards from './components/Cards/Cards';


function App() {
  const { data, fetchData, isLoading } = useFetch();
  const [filteredData, setFilteredData] = useState(data);

  useEffect(() => {
    fetchData('https://restcountries.com/v3.1/all');
  }, [fetchData]);

  useEffect(() => { 
    setFilteredData(data);
  }, [data]);

  return (
    <div className="App">
      <Header />

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
