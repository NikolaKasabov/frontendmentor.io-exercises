import './App.scss';
import { useEffect, useState } from 'react';
import useFetch from './useFetch';
import ThemeSwitch from './components/ThemeSwitch/ThemeSwitch';


function App() {
  const { data, fetchData, isLoading } = useFetch();

  useEffect(() => {
    fetchData('https://restcountries.com/v3.1/all');
  }, [fetchData]);

  return (
    <div className="App">
      123

      <ThemeSwitch />
    </div>
  );
}

export default App;
