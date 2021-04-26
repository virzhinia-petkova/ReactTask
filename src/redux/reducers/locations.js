import { equals } from 'ramda';
import { Map } from 'immutable';
import {
  SET_LOCATIONS_REQUEST_STARTED,
  SET_LOCATIONS_REQUEST_SUCCEEDED,
  SET_LOCATIONS_REQUEST_FAILED,
  SET_LOCATIONS_REQUEST_FINISHED
} from '../actions/locations';

const initialState = Map({
  isLoading: false,
  locations: [],
  errors: []
});

const locationsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOCATIONS_REQUEST_STARTED: {
      return state.set('isLoading', true);
    }
    case SET_LOCATIONS_REQUEST_SUCCEEDED: {
      const AreLocationsEqual = equals(state.get('locations'), action.payload);
      return AreLocationsEqual ? state : state.set('locations', action.payload);
    }
    case SET_LOCATIONS_REQUEST_FAILED: {
      return state.update('errors', errors => errors.push(action.payload));
    }
    case SET_LOCATIONS_REQUEST_FINISHED: {
      return state.set('isLoading', false);
    }
    default: {
      return state;
    }
  }
};

export default locationsReducer;
