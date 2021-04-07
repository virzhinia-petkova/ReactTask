import CurrentWeather from './CurrentWeather';
import { getCurrentWeatherData } from '../actions/currentWeather';
import { connect } from 'react-redux';

const mapStateToProps = state => ({ data: state.current });

const mapDispatchToProps = dispatch => ({
  getCurrentWeatherData: value => dispatch(getCurrentWeatherData(value))
});

export default connect(mapStateToProps, mapDispatchToProps)(CurrentWeather);
