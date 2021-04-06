import SearchList from './SearchList';
import { getLocationData } from '../actions/locations';
import { connect } from 'react-redux';

const mapStateToProps = state => ({ data: state.locations });
// const mapDispatchToProps = dispatch => ({ getData: () => dispatch(getData()) });

export default connect(mapStateToProps, { getLocationData })(SearchList);
