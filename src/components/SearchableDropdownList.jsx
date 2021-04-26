import React, { useState, useMemo } from 'react';
import PropTypes from 'prop-types';

import SearchField from './SearchField';
import Link from './Link';
import { Menu } from 'antd';

const SearchableDropdownList = ({ places, onClick }) => {
  const [searchWord, setSearchWord] = useState('');

  const matchedPlaces = useMemo(() => places.filter(({ name }) => name.includes(searchWord)), [
    searchWord
  ]);

  return (
    <Menu>
      <SearchField
        placeholder="Search..."
        onChange={({ target: { value } }) => setSearchWord(value)}
        value={searchWord}
      />
      {matchedPlaces.map(place => (
        <Menu.Item key={place.id}>
          <Link place={place.name} id={place.id} onClick={onClick} />
        </Menu.Item>
      ))}
    </Menu>
  );
};

SearchableDropdownList.propTypes = {
  places: PropTypes.arrayOf(PropTypes.object).isRequired,
  onClick: PropTypes.func.isRequired
};

export default SearchableDropdownList;
