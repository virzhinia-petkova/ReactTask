import {
  LOCATIONS_SET_LOCATIONS,
  LOCATIONS_FAIL,
  LOCATIONS_LOADING,
  LOCATIONS_LOADED,
} from '../actions/types';

const initialState = {
  locations: [],
  isLoading: true
};

const locations = (state = initialState, action) => {
  switch (action.type) {
    case LOCATIONS_LOADING: {
      return {
        ...state,
        isLoading: true
      };
    }
    case LOCATIONS_SET_LOCATIONS: {
      const sortedLocations = [...action.payload].sort(
        (a, b) => a.country.localeCompare(b.country) || a.name.localeCompare(b.name)
      );
      return {
        ...state,
        locations: sortedLocations
      };
    }
    case LOCATIONS_FAIL: {
      return {
        ...state,
        locations: []
      };
    }
    case LOCATIONS_LOADED: {
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

export default locations;
