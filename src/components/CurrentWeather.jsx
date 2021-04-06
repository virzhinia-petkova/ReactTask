import PropTypes from 'prop-types';

import { useEffect } from 'react';
import { cancelRequest } from '../common/axios-config';

const CurrentWeather = ({ cityId, cityName, getCurrentWeatherData, data: { current, isLoading } }) => {

  useEffect(() => {
    getCurrentWeatherData(cityId);

    return () => cancelRequest();
  }, [cityId]);

  return !isLoading ? (
    <p>{`The current weather in ${cityName} is ${current.temperature} C.`}</p>
  ) : (
    <p>Fetching you data...</p>
  );
};

CurrentWeather.propTypes = {
  cityId: PropTypes.string.isRequired,
  cityName: PropTypes.string.isRequired
};

export default CurrentWeather;
