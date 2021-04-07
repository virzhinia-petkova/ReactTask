import {
  SET_DAILY_SUCCESS,
  SET_DAILY_FAIL,
  SET_DAILY_LOADING,
  SET_DAILY_LOADED
} from '../actions/dailyWeather';

const initialState = {
  isLoading: true,
  daily: [],
  error: []
};

const daily = (state = initialState, action) => {
  switch (action.type) {
    case SET_DAILY_LOADING: {
      return {
        ...state,
        isLoading: true
      };
    }
    case SET_DAILY_SUCCESS: {
      return {
        ...state,
        daily: action.payload.forecast
      };
    }
    case SET_DAILY_FAIL: {
      return {
        ...state,
        daily: {},
        error: [...state.error, action.payload]
      };
    }
    case SET_DAILY_LOADED: {
      return {
        ...state,
        isLoading: false
      };
    }
    default: {
      return state;
    }
  }
};

export default daily;
