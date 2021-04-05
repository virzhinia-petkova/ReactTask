import {
  CURRENT_SET_CURRENT,
  CURRENT_FAIL,
  CURRENT_LOADING,
  CURRENT_LOADED
} from '../actions/types';

const initialState = {
  isLoading: true,
  current: {}
};

const current = (state = initialState, action) => {
  switch (action.type) {
    case CURRENT_LOADING: {
      return {
        ...state,
        isLoading: true
      };
    }
    case CURRENT_SET_CURRENT: {
      return {
        ...state,
        current: action.payload.current
      };
    }
    case CURRENT_FAIL: {
      return {
        ...state,
        current: {}
      };
    }
    case CURRENT_LOADED: {
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

export default current;
