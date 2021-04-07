import PropTypes from 'prop-types';

import { useEffect } from 'react';
import { cancelRequest } from '../common/axios-config';
import { WEATHER_SYMBOL_BASE_URL } from '../common/constants';

import Daily from './Daily';
import Current from './Current';

const CurrentWeather = ({
  cityId,
  cityName,
  getCurrentWeatherData,
  getDailyData,
  current: { current, isLoading: isCurrentLoading },
  daily: { daily, isLoading: isDailyLoading }
}) => {
  useEffect(() => {
    getCurrentWeatherData(cityId);
    getDailyData(cityId);

    return () => cancelRequest();
  }, [cityId]);

  return (
    <div className="weather">
      {!isCurrentLoading && !isDailyLoading ? (
        <>
          <Current cityName={cityName} current={current} />
          <Daily daily={daily} />
        </>
      ) : (
        <p>Fetching you data...</p>
      )}
    </div>
  );
};

CurrentWeather.propTypes = {
  cityId: PropTypes.string.isRequired,
  cityName: PropTypes.string.isRequired,
  getCurrentWeatherData: PropTypes.func.isRequired,
  current: PropTypes.object.isRequired,
  daily: PropTypes.arrayOf(PropTypes.object).isRequired,
  isLoading: PropTypes.bool.isRequired
};

export default CurrentWeather;
