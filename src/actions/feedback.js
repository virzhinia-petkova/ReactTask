const PREFIX = 'FEEDBACK/';

export const SET_FIELD = `${PREFIX}SET_FIELD`;
export const SET_IS_FORM_VALID = `${PREFIX}SET_IS_FORM_VALID`;
export const SET_IS_FORM_SUBMITTED = `${PREFIX}SET_IS_FORM_SUBMITTED`;
export const RESET_FORM_STATE = `${PREFIX}RESET_FORM_STATE`;
export const SUBMIT_FORM = `${PREFIX}SUBMIT_FORM`;

const setField = (name, copyControl) => ({ type: SET_FIELD, payload: { name, copyControl } });
const setValid = isValid => ({ type: SET_IS_FORM_VALID, payload: isValid });
const submitFormAction = { type: SUBMIT_FORM };
const resetState = { type: RESET_FORM_STATE };

export const setForm = event => (dispatch, getState) => {
  const { name, value } = event.target;
  const {
    feedback: { formData }
  } = getState();

  const copyControl = formData[name];
  copyControl.answer = value;
  copyControl.touched = true;

  copyControl.answer.length >= copyControl.validators.minLength
    ? (copyControl.valid = true)
    : (copyControl.valid = false);

  dispatch(setField(name, copyControl));

  const isValid = Object.values(formData).every(field => field.valid);
  dispatch(setValid(isValid));
};

export const submitForm = event => (dispatch, getState) => {
  event.preventDefault();
  const {
    feedback: { formData }
  } = getState();

  const formState = Object.values(formData).reduce(
    (acc, value) => [...acc, { question: value.question, answer: value.answer }],
    []
  );
  const storedFeedback = JSON.parse(localStorage.getItem('feedback')) || [];
  const addedFeedback = [...storedFeedback, formState];
  localStorage.setItem('feedback', JSON.stringify(addedFeedback));

  dispatch(submitFormAction);
  dispatch(resetState);
};
