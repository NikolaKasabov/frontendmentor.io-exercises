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

  return (
    <div className={classes.wrapper}>
      <Header />
      <main className={`${classes.main} ${selectedFilters.length > 0 ? 'hasFilters' : ''}`}>
        <section className={classes.jobOffersContainer}>
          {filteredOffers.map((el, index) => (
            <JobOffer key={el.id} {...el} logo={logos[el.id - 1]} />
          ))}
        </section>
      </main>
    </div>
  );
}

export default App;
