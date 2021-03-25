import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import data from '../common/axios-config';
import { BASE_URL } from '../common/constants';
import SearchList from './SearchList';
import CurrentWeather from './CurrentWeather';

const Weather = ({ currentSearch }) => {
  const [currentTemp, setCurrentTemp] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isSearchListVisible, setIsSearchListVisible] = useState(false);

  useEffect(() => {
    const cancelTokenSource = data.CancelToken.source();
    // get all cities that match the search
    data
      .get(`${BASE_URL}/location/search/${currentSearch}`, {
        cancelToken: cancelTokenSource.token
      })
      .then(({ data: { locations } }) => {
        setSearchResults(locations);
        setIsSearchListVisible(true);
      });

    return () => cancelTokenSource.cancel();
  }, [currentSearch]);

  const handleSelectCity = e => {
    // find the exact city chosen from the search results list
    const searchedCity = searchResults.find(
      search => `${search.name}, ${search.country}` === e.target.innerText
    );
    // use the id of the chosen city to get it's current weather data
    data.get(`${BASE_URL}/current/${searchedCity.id}`).then(({ data: { current } }) => {
      setCurrentTemp(current.temperature);
      setIsSearchListVisible(false);
    });
  };

  return (
    <>
      {isSearchListVisible ? (
          <SearchList searchResults={searchResults} onClick={handleSelectCity} />
          ) : (
          <CurrentWeather currentSearch={currentSearch} currentTemp={currentTemp} />
      )}
    </>
  );
};

Weather.propTypes = {
  currentSearch: PropTypes.string.isRequired
};

export default Weather;
