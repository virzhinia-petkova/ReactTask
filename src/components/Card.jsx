import PropTypes from 'prop-types';

const Card = ({ children }) => {
  return <div className="card">{children}</div>;
};

Card.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element.isRequired
  ])
};

export default Card;
