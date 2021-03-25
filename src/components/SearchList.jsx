import { useMemo } from 'react';
import PropTypes from 'prop-types';

import Link from './Link';

const SearchList = ({ searchResults, onClick }) => {
  const memoizedSearch = useMemo(
    () =>
      // sort by country and then by city
      [...searchResults].sort(
        (a, b) => a.country.localeCompare(b.country) || a.name.localeCompare(b.name)
      ),
    [searchResults]
  );
  return searchResults.length > 0 ? (
    memoizedSearch.map(result => (
      <Link place={`${result.name}, ${result.country}`} key={result.id} onClick={onClick} />
    ))
  ) : (
    <p>Ooops, looks like we couldn't find anything</p>
  );
};
SearchList.propTypes = {
  currentSearch: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};

export default SearchList;
