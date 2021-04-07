import Feedback from './Feedback';
import { setForm, submitForm } from '../actions/feedback';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  isFormValid: state.feedback.isFormValid,
  isFormSubmitted: state.feedback.isFormSubmitted,
  form: state.feedback.formData
});

export default connect(mapStateToProps, { setForm, submitForm })(Feedback);
