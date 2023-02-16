import classes from './App.module.css';
import data from './data.json';
import logo1 from './images/photosnap.svg';
import logo2 from './images/manage.svg';
import logo3 from './images/account.svg';
import logo4 from './images/myhome.svg';
import logo5 from './images/loop-studios.svg';
import logo6 from './images/faceit.svg';
import logo7 from './images/shortly.svg';
import logo8 from './images/insure.svg';
import logo9 from './images/eyecam-co.svg';
import logo10 from './images/the-air-filter-company.svg';
import Header from './components/Header/Header';
import JobOffer from './components/JobOffer/JobOffer';
import { useEffect, useState } from 'react';
import Filters from './components/Filters/Filters';

const logos = [
  logo1,
  logo2,
  logo3,
  logo4,
  logo5,
  logo6,
  logo7,
  logo8,
  logo9,
  logo10
];

function App() {
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [filteredOffers, setFilteredOffers] = useState(data);

  useEffect(() => {
    let temp = data;

    selectedFilters.forEach(selectedFilter => {
      temp = temp.filter(job => {
        return (
          job.role === selectedFilter ||
          job.level === selectedFilter ||
          job.languages.includes(selectedFilter) ||
          job.tools.includes(selectedFilter)
        );
      })
    });

    setFilteredOffers(temp);
  }, [selectedFilters]);

  function addFilterHandler(filter) {
    if (selectedFilters.includes(filter)) {
      return;
    }

    setSelectedFilters(prev => {
      return [
        ...prev,
        filter
      ];
    });
  }

  function removeFilterHandler(filter) {
    setSelectedFilters(prev => {
      return prev.filter(f => f !== filter);
    });
  }

  function clearFiltersHandler() {
    setSelectedFilters([]);
  }

  return (
    <div className={classes.wrapper}>
      <Header />
      <main className={`${classes.main} ${selectedFilters.length > 0 ? classes.hasFilters : ''}`}>
        {selectedFilters.length > 0 && (
          <div className={classes.filtersWrapper}>
            <Filters filters={selectedFilters}
              onRemoveFilter={removeFilterHandler}
              onClearFilters={clearFiltersHandler}
            />
          </div>
        )}
        <section className={classes.jobOffersContainer}>
          {filteredOffers.map(el => (
            <JobOffer key={el.id}
              {...el}
              logo={logos[el.id - 1]}
              onAddFilter={addFilterHandler}
            />
          ))}
        </section>
      </main>
    </div>
  );
}

export default App;
