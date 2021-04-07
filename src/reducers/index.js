import { combineReducers } from 'redux';
import locations from './locations';
import current from './currentWeather';
import daily from './dailyWeather';

const rootReducer = combineReducers({
  locations,
  current,
  daily
});

export default rootReducer;
