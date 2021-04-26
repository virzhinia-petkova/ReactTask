import React from 'react';
import { Divider, Row, Col } from 'antd';

import SearchField from '../SearchField';
import SearchableDropdown from '../SearchableDropdown';
import CurrentWeather from '../CurrentWeather/CurrentWeatherContainer';

import useLocationQueryStrings from '../../customHooks/useLocationQueryStrings';
import useAuth from '../../customHooks/useAuth';
import useCitySearch from '../../customHooks/useCitySearch';

const popularPlaces = [
  { name: 'New York', id: 1 },
  { name: 'Monaco', id: 2 },
  { name: 'London', id: 3 },
  { name: 'Tokyo', id: 4 }
];

const Home = () => {
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
    <Row justify="center">
      <Row>
        {error ? <p>{error}</p> : null}
        <Col>
          <SearchField
            placeholder="Search a new place..."
            value={query}
            onChange={e => onQueryChange(e.target.value)}
            onKeyDown={startNewSearch}
          />
        </Col>
        <Col>
          <SearchableDropdown
            places={savedCities}
            buttonText="Recent searches ˅"
            onClick={startExistingSearch}
          />
        </Col>
        <Col>
          <SearchableDropdown
            places={popularPlaces}
            buttonText="Popular places ˅"
            onClick={startExistingSearch}
          />
        </Col>
      </Row>
      <Divider />
      {cityName ? <CurrentWeather cityId={cityId} cityName={cityName} /> : null}
    </Row>
  ) : (
    <p>Getting things ready for you</p>
  );
};

export default Home;
