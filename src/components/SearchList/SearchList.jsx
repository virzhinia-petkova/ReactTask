import { useHistory, useParams } from 'react-router';
import PropTypes from 'prop-types';
import { List, Typography, Divider, Spin } from 'antd';

import Link from '../Link';
import useFetch from '../../customHooks/useFetch';

const SearchList = ({ locations, isLoading, getLocationData }) => {
  const { location } = useParams();
  const history = useHistory();

  useFetch(getLocationData, location);

  const handleSelectCity = ({ place, id }) => {
    history.push(`/home?city=${place}&id=${id}`);
  };

  return (
    <>
      <Divider orientation="center">Here are the matches for your location:</Divider>
      {!isLoading ? (
        locations?.length > 0 ? (
          <List
            size="small"
            dataSource={locations}
            renderItem={result => (
              <List.Item orientation="center">
                {
                  <Link
                    place={result.fullName}
                    key={result.id}
                    id={result.id}
                    onClick={handleSelectCity}
                  />
                }
              </List.Item>
            )}
          />
        ) : (
          <Typography.Text>Ooops, looks like we couldn't find anything</Typography.Text>
        )
      ) : (
        <>
          <Spin />
        </>
      )}
    </>
  );
};

SearchList.propTypes = {
  locations: PropTypes.arrayOf(
    PropTypes.shape({
      fullName: PropTypes.string,
      id: PropTypes.number
    })
  ).isRequired,
  isLoading: PropTypes.bool.isRequired,
  getLocationData: PropTypes.func.isRequired,
  setsearchWord: PropTypes.func.isRequired
};

export default SearchList;
