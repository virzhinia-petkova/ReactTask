import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { REQUEST_TYPES } from '../../common/constants';
import { getCurrentWeatherData } from '../../actions/currentWeather';
import { getLocationData } from '../../actions/location';
import { cancelRequest } from '../../common/axios-config';

const typeMap = new Map([
  [REQUEST_TYPES.location, getLocationData],
  [REQUEST_TYPES.current, getCurrentWeatherData]
]);

const useAPIRequest = (type, urlParam) => {
  const data = useSelector(state => state[type]);
  const dispatch = useDispatch();

  if (!typeMap.has(type)) {
    return [];
  }

  useEffect(() => {
    dispatch(typeMap.get(type)(urlParam));

    return () => cancelRequest();
  }, [type, urlParam, dispatch]);
  return data;
};

export default useAPIRequest;
