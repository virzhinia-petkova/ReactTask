import { equals } from 'ramda';
import { Map } from 'immutable';
import {
  SET_CURRENT_WEATHER_REQUEST_STARTED,
  SET_CURRENT_WEATHER_REQUEST_SUCCEEDED,
  SET_CURRENT_WEATHER_REQUEST_FAILED,
  SET_CURRENT_WEATHER_REQUEST_FINISHED
} from '../actions/currentWeather';

const initialState = Map({
  isLoading: false,
  current: {},
  errors: []
});

const currentWeatherReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_WEATHER_REQUEST_STARTED: {
      return state.set('isLoading', true);
    }
    case SET_CURRENT_WEATHER_REQUEST_SUCCEEDED: {
      const isWeatherEqual = equals(state.get('current'), action.payload);
      return isWeatherEqual ? state : state.set('current', action.payload);
    }
    case SET_CURRENT_WEATHER_REQUEST_FAILED: {
      return state.update('errors', errors => [...errors, action.payload]);
    }
    case SET_CURRENT_WEATHER_REQUEST_FINISHED: {
      return state.set('isLoading', false);
    }
    default: {
      return state;
    }
  }
};

export default currentWeatherReducer;
