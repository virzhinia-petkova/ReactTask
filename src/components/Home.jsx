import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

import SearchField from './SearchField';
import SearchableDropdown from './SearchableDropdown';
import SearchList from './SearchList';

import useLocalStorage from './CustomHooks/useLocalStorage';
import { ENTER_KEYCODE, MAX_ITEMS_LENGTH } from '../common/constants';

const Home = () => {
  const history = useHistory();
  const { search } = useLocation();
  // take the value after =, which is the city
  const citySearch = search?.split('=')[1];
  // if there is a search query - take it as inital value
  const initSearchWordValue = citySearch ? citySearch : '';
  const [searchWord, setSearchWord] = useState(initSearchWordValue);
  const [searchError, setSearchError] = useState('');
  const [storedValue, setValue] = useLocalStorage('searchedPlaces', []);

  const popularPlaces = [
    { name: 'New York', id: 1 },
    { name: 'Monaco', id: 2 },
    { name: 'London', id: 3 },
    { name: 'Tokyo', id: 4 }
  ];

  const handleListItemClick = e => {
    const searchTerm = e.target.innerText;
    setSearchWord(searchTerm);
    history.push(`/home?search=${searchTerm}`);
  };

  const handleSearch = e => {
    if (e.keyCode === ENTER_KEYCODE) {
      if (!searchWord) {
        return setSearchError('Please provide a search term');
      }

      history.push(`/home?search=${searchWord}`);
      setSearchError(null);

      // if the city is already in LocalStorage, don't add it again
      if (storedValue.find(({ name }) => name === searchWord)) {
        return '';
      }

      // keep only 5 cities at a time
      const lastFiveSearchedCities = storedValue.slice(0, MAX_ITEMS_LENGTH);
      // take the id of the last added city and use it +1 as id
      // if there are no searched cities, just use 1
      const newCityId = lastFiveSearchedCities[0] ? lastFiveSearchedCities[0].id + 1 : 1;

      const newCity = {
        name: searchWord,
        id: newCityId
      };
      // set the new items to LocalStorage
      setValue([newCity, ...lastFiveSearchedCities]);
    }

    return '';
  };

  return (
    <main className="app__main home">
      <section className="home__filters">
        {searchError ? <p className="home__filters__error">{searchError}</p> : null}
        <SearchField
          placeholder="Search a new place..."
          value={searchWord}
          onChange={e => setSearchWord(e.target.value)}
          onKeyDown={handleSearch}
        />
        <SearchableDropdown
          places={storedValue}
          buttonText="Recent searches ˅"
          onClick={handleListItemClick}
        />
        <SearchableDropdown
          places={popularPlaces}
          buttonText="Popular places ˅"
          onClick={handleListItemClick}
        />
      </section>
      {citySearch ?  <SearchList currentSearch={searchWord} /> : null}
    </main>
  );
};

export default Home;
