import { combineReducers } from 'redux';
import locations from './locations';
import current from './currentWeather';
import feedback from './feedback';

const rootReducer = combineReducers({
  locations,
  current,
  feedback
});

export default rootReducer;
