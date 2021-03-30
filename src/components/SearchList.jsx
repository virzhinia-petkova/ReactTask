import { useMemo, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useHistory, useParams } from 'react-router';

import Link from './Link';
import data from '../common/axios-config';
import { BASE_URL, ERRORS } from '../common/constants';

const SearchList = () => {
  const [searchResults, setSearchResults] = useState([]);
  const { location } = useParams();

  console.log(location);
  const history = useHistory();

  useEffect(() => {
    const cancelTokenSource = data.CancelToken.source();
    try {
      // get all cities that match the search
      data
        .get(`${BASE_URL}/location/search/${location}`, {
          cancelToken: cancelTokenSource.token
        })
        .then(({ data: { locations } }) => {
          setSearchResults(locations);
        });
    } catch (error) {
      alert(ERRORS.DEFAULT.message);
    }

    return () => cancelTokenSource.cancel();
  }, [location]);

  const handleSelectCity = e => {
    // find the exact city chosen from the search results list
    const selectedCityId = e.target.getAttribute('data-target');
    const selectedCityName = e.target.innerText;

    // update the url with the searched city name & its id
    history.push(`/home?city=${selectedCityName}&id=${selectedCityId}`);
  };

  const memoizedSearch = useMemo(
    () =>
      // sort by country and then by city
      [...searchResults].sort(
        (a, b) => a.country.localeCompare(b.country) || a.name.localeCompare(b.name)
      ),
    [searchResults]
  );
  return (
    <div className="app__main">
      <h2>Here's what we found:</h2>
      {searchResults.length > 0 ? (
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
      )}
    </div>
  );
};
SearchList.propTypes = {
  currentSearch: PropTypes.string.isRequired
};

export default SearchList;
