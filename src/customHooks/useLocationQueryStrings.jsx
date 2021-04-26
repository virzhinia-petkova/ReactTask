import { useLocation } from 'react-router-dom';
import { USER_LOOCATION } from '../common/constants';
import { groupQueryString, transformSpaces } from '../common/helpers';

const useLocationQueryStrings = coords => {
  const { search } = useLocation();

  const groupedQueryStrings = groupQueryString(search);
  const cityName = transformSpaces(groupedQueryStrings) || USER_LOOCATION;
  const cityId = groupedQueryStrings.id || coords;

  return { cityId, cityName };
};

export default useLocationQueryStrings;
