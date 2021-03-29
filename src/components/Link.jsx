import React from 'react';
import PropTypes from 'prop-types';

const Link = ({ place, onClick, id }) => (
  <a
    className="dropdown__list__item"
    onClick={onClick}
    onKeyDown={onClick}
    data-target={id}
    tabIndex={0}
    role="button"
  >
    {place}
  </a>
);

Link.propTypes = {
  place: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  id: PropTypes.string.isRequired
};

export default Link;
