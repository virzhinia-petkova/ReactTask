import { CURRENT_SET_CURRENT, CURRENT_FAIL, CURRENT_LOADING, CURRENT_LOADED } from './types';
import axios, { areRequestsCanceled } from '../common/axios-config';
import { BASE_URL, ERRORS } from '../common/constants';

export const getCurrentWeatherData = cityId => async dispatch => {
  try {
    dispatch({ type: CURRENT_LOADING });
    const { data } = await axios.get(`${BASE_URL}/current/${cityId}`);
    dispatch({ type: CURRENT_SET_CURRENT, payload: data });
  } catch (error) {
    dispatch({ type: CURRENT_FAIL });
    areRequestsCanceled(error) || alert(ERRORS.DEFAULT.message);
  } finally {
    dispatch({ type: CURRENT_LOADED });
  }
};
