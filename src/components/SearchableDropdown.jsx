import React from 'react';
import PropTypes from 'prop-types';

import SearchableDropdownList from './SearchableDropdownList';
import { Button, Dropdown } from 'antd';

const SearchableDropdown = ({ places, buttonText, onClick }) => {
  return (
    <Dropdown
      overlay={<SearchableDropdownList places={places} onClick={onClick} />}
      placement="bottomLeft"
      arrow
    >
      <Button>{buttonText}</Button>
    </Dropdown>
  );
};

SearchableDropdown.propTypes = {
  places: PropTypes.arrayOf(PropTypes.object).isRequired,
  buttonText: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};

export default SearchableDropdown;
