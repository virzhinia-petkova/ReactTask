import { useHistory, useParams } from 'react-router';

import Link from './Link';

import { useEffect } from 'react';
import { cancelRequest } from '../common/axios-config';

const SearchList = ({ getLocationData, data: { locations, isLoading } }) => {
  const { location } = useParams();
  const history = useHistory();

  useEffect(() => {
    getLocationData(location);

    return () => cancelRequest();
  }, [location])

  const handleSelectCity = e => {
    const selectedCityId = e.target.dataset.target;
    const selectedCityName = e.target.dataset.name;

    history.push(`/home?city=${selectedCityName}&id=${selectedCityId}`);
  };

  return (
    <div className="app__main">
      <h2>Here's what we found:</h2>
      {!isLoading ? 
      locations.length > 0 ? (
        locations.map(result => (
          <Link
            place={`${result.name}, ${result.country}`}
            key={result.id}
            id={result.id}
            onClick={handleSelectCity}
          />
        ))
      ) : (
        <p>Ooops, looks like we couldn't find anything</p>
      ) : <p>Fetching you data...</p> }
    </div>
  );
};

export default SearchList;
