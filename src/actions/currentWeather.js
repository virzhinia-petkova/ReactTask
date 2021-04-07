import axios, { areRequestsCanceled } from '../common/axios-config';
import { BASE_URL, ERRORS } from '../common/constants';

const PREFIX = 'CURRENT_WEATHER/';

export const SET_CURRENT_SUCCESS = `${PREFIX}SET_CURRENT_SUCCESS`;
export const SET_CURRENT_FAIL = `${PREFIX}SET_CURRENT_FAIL`;
export const SET_CURRENT_LOADING = `${PREFIX}SET_CURRENT_LOADING_LOADING`;
export const SET_CURRENT_LOADED = `${PREFIX}SET_CURRENT_LOADED`;

const setCurrentFail = error => ({ type: SET_CURRENT_FAIL, payload: error });
const setCurrentSuccess = locations => ({ type: SET_CURRENT_SUCCESS, payload: locations });
const setCurrentLoading = { type: SET_CURRENT_LOADING };
const setCurrentLoaded = { type: SET_CURRENT_LOADED };

export const getCurrentWeatherData = cityId => async dispatch => {
  try {
    dispatch(setCurrentLoading);

    const { data } = await axios.get(`${BASE_URL}/current/${cityId}`);
    dispatch(setCurrentSuccess(data));
  } catch (error) {
    dispatch(setCurrentFail(error));

    areRequestsCanceled(error) || alert(ERRORS.DEFAULT.message);
  } finally {
    dispatch(setCurrentLoaded);
  }
};
