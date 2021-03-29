import { useMemo, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router';

import Link from './Link';
import data from '../common/axios-config';
import { BASE_URL, ERRORS } from '../common/constants';

const SearchList = ({ currentSearch }) => {
  const [searchResults, setSearchResults] = useState([]);
  const history = useHistory();

  useEffect(() => {
    const cancelTokenSource = data.CancelToken.source();
    try {
      // get all cities that match the search
      data
        .get(`${BASE_URL}/location/search/${currentSearch}`, {
          cancelToken: cancelTokenSource.token
        })
        .then(({ data: { locations } }) => {
          setSearchResults(locations);
        });
    } catch (error) {
      alert(ERRORS.DEFAULT.message);
    }

    return () => cancelTokenSource.cancel();
  }, [currentSearch]);

  const handleSelectCity = e => {
    // find the exact city chosen from the search results list
    const selectedCityId = e.target.getAttribute('data-target');
    const selectedCityName = e.target.innerText;

    // update the url with the searched city name & its id
    history.push(`/home/${selectedCityName}-${selectedCityId}`);
  };

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
      <Link
        place={`${result.name}, ${result.country}`}
        key={result.id}
        id={result.id}
        onClick={handleSelectCity}
      />
    ))
  ) : (
    <p>Ooops, looks like we couldn't find anything</p>
  );
};
SearchList.propTypes = {
  currentSearch: PropTypes.string.isRequired
};

export default SearchList;
