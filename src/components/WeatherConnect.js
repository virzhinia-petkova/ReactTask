import CurrentWeather from './Weather';
import { getCurrentWeatherData } from '../actions/currentWeather';
import { getDailyData } from '../actions/dailyWeather';
import { connect } from 'react-redux';

const mapStateToProps = state => ({ current: state.current, daily: state.daily });

const mapDispatchToProps = dispatch => ({
  getCurrentWeatherData: value => dispatch(getCurrentWeatherData(value)),
  getDailyData: value => dispatch(getDailyData(value))
});

export default connect(mapStateToProps, mapDispatchToProps)(CurrentWeather);
