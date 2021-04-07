import SearchList from './SearchList';
import { getLocationData } from '../actions/locations';
import { connect } from 'react-redux';

const mapStateToProps = state => ({ data: state.locations });

const mapDispatchToProps = dispatch => ({
  getLocationData: value => dispatch(getLocationData(value))
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchList);
