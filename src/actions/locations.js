import axios, { areRequestsCanceled } from '../common/axios-config';
import { BASE_URL, ERRORS } from '../common/constants';
import { sortLocations } from '../common/helpers';

const PREFIX = 'LOCATIONS/';

export const SET_LOCATIONS_SUCCESS = `${PREFIX}SET_LOCATIONS_SUCCESS`;
export const SET_LOCATIONS_FAIL = `${PREFIX}SET_LOCATIONS_FAIL`;
export const SET_LOCATIONS_LOADING = `${PREFIX}SET_LOCATIONS_LOADING`;
export const SET_LOCATIONS_LOADED = `${PREFIX}SET_LOCATIONS_LOADED`;

const setLocationsFail = error => ({ type: SET_LOCATIONS_FAIL, payload: error });
const setLocationsSuccess = locations => ({ type: SET_LOCATIONS_SUCCESS, payload: locations });
const setLocationsLoading = { type: SET_LOCATIONS_LOADING };
const setLocationsLoaded = { type: SET_LOCATIONS_LOADED };

export const getLocationData = location => async dispatch => {
  try {
    dispatch(setLocationsLoading);

    const {
      data: { locations }
    } = await axios.get(`${BASE_URL}/location/search/${location}`);
    const sortedLocations = sortLocations(locations);

    dispatch(setLocationsSuccess(sortedLocations));
  } catch (error) {
    dispatch(setLocationsFail(error));

    areRequestsCanceled(error) || alert(ERRORS.DEFAULT.message);
  } finally {
    dispatch(setLocationsLoaded);
  }
};
