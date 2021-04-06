import { useState, useEffect } from 'react';
import { ERRORS, REQUEST_TYPES } from '../../common/constants';
import { getLocationData, getCurrentWeatherData } from '../../services/weatherService';
import { cancelRequest, areRequestsCanceled } from '../../common/axios-config';

const typeMap = new Map([
  [REQUEST_TYPES.location, getLocationData],
  [REQUEST_TYPES.current, getCurrentWeatherData]
]);

const useAPIRequest = (type, urlParam, action) => {
  useEffect(() => {
    action(urlParam);

    return () => cancelRequest();
  }, [type, urlParam]);
};

export default useAPIRequest;
