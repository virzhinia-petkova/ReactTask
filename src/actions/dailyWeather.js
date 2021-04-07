import axios, { areRequestsCanceled } from '../common/axios-config';
import { BASE_URL, ERRORS } from '../common/constants';

const PREFIX = 'DAILY/';

export const SET_DAILY_SUCCESS = `${PREFIX}SET_DAILY_SUCCESS`;
export const SET_DAILY_FAIL = `${PREFIX}SET_DAILY_FAIL`;
export const SET_DAILY_LOADING = `${PREFIX}SET_DAILY_LOADING_LOADING`;
export const SET_DAILY_LOADED = `${PREFIX}SET_DAILY_LOADED`;

const setDailyFail = error => ({ type: SET_DAILY_FAIL, payload: error });
const setDailySuccess = data => ({ type: SET_DAILY_SUCCESS, payload: data });
const setDailyLoading = { type: SET_DAILY_LOADING };
const setDailyLoaded = { type: SET_DAILY_LOADED };

export const getDailyData = (cityId, numberOfDays = 6) => async dispatch => {
  try {
    dispatch(setDailyLoading);

    const { data } = await axios.get(
      `${BASE_URL}/forecast/daily/${cityId}?periods=${numberOfDays}&dataset=full`
    );
    dispatch(setDailySuccess(data));
  } catch (error) {
    dispatch(setDailyFail(error));

    areRequestsCanceled(error) || alert(ERRORS.DEFAULT.message);
  } finally {
    dispatch(setDailyLoaded);
  }
};
