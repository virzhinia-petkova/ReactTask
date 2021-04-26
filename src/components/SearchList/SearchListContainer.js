import { connect } from 'react-redux';

import SearchList from './SearchList';
import { getLocationData } from '../../redux/actions/locations';
import { getIsLoading, selectLocations } from '../../redux/selectors/locationsSelectors';

const mapStateToProps = state => ({
  locations: selectLocations(state),
  isLoading: getIsLoading(state)
});

const mapDispatchToProps = dispatch => ({
  getLocationData: value => dispatch(getLocationData(value))
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchList);
