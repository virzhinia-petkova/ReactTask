const Feedback = ({ isFormValid, isFormSubmitted, form, setForm, submitForm }) => {
  return !isFormSubmitted ? (
    <>
      <h2 className="feedback">We'd like to ask you a few questions...</h2>
      <form onSubmit={submitForm} className="feedback__form">
        {Object.values(form).map(field => (
          <div key={field.name} className="feedback__form__control">
            <label htmlFor={field.name} className="feedback__form__control__label">
              {field.question}
            </label>
            <input
              style={
                field.touched
                  ? field.valid
                    ? { border: '2px solid green' }
                    : { border: '2px solid red' }
                  : null
              }
              type="text"
              placeholder={field.placeholder}
              name={field.name}
              value={field.answer}
              onChange={setForm}
              required={field.validators.required}
              className="input"
            />
          </div>
        ))}
        <button type="submit" disabled={!isFormValid} className="button">
          Submit
        </button>
      </form>
    </>
  ) : (
    <p>Submitted! Thank you for your feedback!</p>
  );
};

export default Feedback;
