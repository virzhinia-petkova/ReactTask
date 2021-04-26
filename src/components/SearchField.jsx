import React from 'react';
import PropTypes from 'prop-types';
import { Input } from 'antd';

const SearchField = ({ placeholder, onChange, onKeyDown, value }) => (
  <Input.Search
    type="text"
    placeholder={placeholder}
    value={value}
    onChange={onChange}
    onKeyDown={onKeyDown}
  />
);

SearchField.propTypes = {
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onKeyDown: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired
};

export default SearchField;
