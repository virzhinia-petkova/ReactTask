import { useEffect, useState } from 'react';
import data from '../common/axios-config';
import { BASE_URL, ERRORS } from '../common/constants';

const CurrentWeather = ({ cityId, cityName }) => {
  const [currentTemp, setCurrentTemp] = useState('');

  useEffect(() => {
    const cancelTokenSource = data.CancelToken.source();
    try {
      // use the id of the chosen city to get it's current weather data
      data
        .get(`${BASE_URL}/current/${cityId}`, {
          cancelToken: cancelTokenSource.token
        })
        .then(({ data: { current } }) => {
          setCurrentTemp(current.temperature);
        });
    } catch (error) {
      alert(ERRORS.DEFAULT.message);
    }

    return () => cancelTokenSource.cancel();
  }, [cityId]);

  return <p className="app__main">{`The current weather in ${cityName} is ${currentTemp} C.`}</p>;
};

export default CurrentWeather;
