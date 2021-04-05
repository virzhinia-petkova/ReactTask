import {
  LOCATIONS_SET_LOCATIONS,
  LOCATIONS_FAIL,
  LOCATIONS_LOADING,
  LOCATIONS_LOADED,
} from './types';
import axios, { areRequestsCanceled } from '../common/axios-config';
import { BASE_URL, ERRORS } from '../common/constants';

export const getLocationData = location => async dispatch => {
  try {
    dispatch({ type: LOCATIONS_LOADING });
    const {
      data: { locations }
    } = await axios.get(`${BASE_URL}/location/search/${location}`);
    dispatch({ type: LOCATIONS_SET_LOCATIONS, payload: locations });
  } catch (error) {
    dispatch({ type: LOCATIONS_FAIL });
    areRequestsCanceled(error) || alert(ERRORS.DEFAULT.message);
  } finally {
    dispatch({ type: LOCATIONS_LOADED });
  }
};