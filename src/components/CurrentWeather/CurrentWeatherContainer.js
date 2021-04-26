import { connect } from 'react-redux';
import CurrentWeather from './CurrentWeather';
import { getCurrentWeatherData } from '../../redux/actions/currentWeather';
import {
  getCurrentWeather,
  getIsLoading
} from '../../redux/selectors/currentWeatherSelectors';

const mapStateToProps = state => ({
  current: getCurrentWeather(state),
  isLoading: getIsLoading(state)
});

const mapDispatchToProps = dispatch => ({
  getCurrentWeatherData: value => dispatch(getCurrentWeatherData(value))
});

export default connect(mapStateToProps, mapDispatchToProps)(CurrentWeather);
