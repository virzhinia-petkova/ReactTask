import { combineReducers } from 'redux';
import locations from './locations';
import current from './currentWeather';

const rootReducer = combineReducers({
  locations,
  current
});

export default rootReducer;
