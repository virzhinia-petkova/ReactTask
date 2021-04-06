import PropTypes from 'prop-types';

import useAPIRequest from './CustomHooks/useAPIRequest';
import { REQUEST_TYPES } from '../common/constants';
import { useEffect } from 'react';

const CurrentWeather = (
  // { cityId, cityName, getCurrentWeatherData, data }
  props
) => {
  useEffect(() => {
    props.getCurrentWeatherData(props.cityId);
  }, [props.cityId]);

  return props.data.current ? (
    <p>{`The current weather in ${props.cityName} is ${props.data.current.temperature} C.`}</p>
  ) : (
    <p>Fetching you data...</p>
  );
};

CurrentWeather.propTypes = {
  cityId: PropTypes.string.isRequired,
  cityName: PropTypes.string.isRequired
};

export default CurrentWeather;
