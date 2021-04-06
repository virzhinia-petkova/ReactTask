import CurrentWeather from './CurrentWeather';
import { getCurrentWeatherData } from '../actions/currentWeather';
import { connect } from 'react-redux';

const mapStateToProps = state => ({ data: state.current });
// const mapDispatchToProps = dispatch => ({ getData: () => dispatch(getData()) });

export default connect(mapStateToProps, { getCurrentWeatherData })(CurrentWeather);
