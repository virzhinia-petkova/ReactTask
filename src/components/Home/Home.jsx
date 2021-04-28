import React from 'react';
import PropTypes from 'prop-types';

import SearchField from '../SearchField';
import SearchableDropdown from '../SearchableDropdown';
import CurrentWeather from '../CurrentWeather/CurrentWeatherContainer';

import useLocationQueryStrings from '../../customHooks/useLocationQueryStrings';
import useAuth from '../../customHooks/useAuth';
import useCitySearch from '../../customHooks/useCitySearch';
import * as Styled from '../../styles/globalStyles';

const popularPlaces = [
  { name: 'New York', id: 105128581 },
  { name: 'Monaco', id: 102993458 },
  { name: 'London', id: 102643743 },
  { name: 'Tokyo', id: 101850147 },
  { name: 'Paris', id: 10 },
];

const Home = ({ className }) => {
  const isAuthenticating = useAuth();
  const { cityId, cityName } = useLocationQueryStrings();
  const {
    onQueryChange,
    query,
    error,
    savedCities,
    startNewSearch,
    startExistingSearch
  } = useCitySearch(cityName);

  return !isAuthenticating ? (
    <main className={className}>
      <Styled.Container row>
        <SearchField
          placeholder="Search a new place..."
          value={query}
          onChange={e => onQueryChange(e.target.value)}
          onKeyDown={startNewSearch}
        />
        <SearchableDropdown
          places={savedCities}
          buttonText="Recent searches ˅"
          onClick={startExistingSearch}
        />
        <SearchableDropdown
          places={popularPlaces}
          buttonText="Popular places ˅"
          onClick={startExistingSearch}
        />
      </Styled.Container>
      <Styled.Error>{error}</Styled.Error>
      {cityName ? <CurrentWeather cityId={cityId} cityName={cityName} /> : null}
    </main>
  ) : (
    <p>Getting things ready for you</p>
  );
};

Home.propTypes = {
  className: PropTypes.string
};

export default Home;
