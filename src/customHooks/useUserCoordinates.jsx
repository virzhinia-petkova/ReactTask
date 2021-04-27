import { useEffect, useState } from 'react';
import { ERRORS, GEOLOCATION_ERROR } from '../common/constants';

const useUserCoordinates = () => {
  const [coords, setCoords] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;

    const success = position => {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;

      isMounted && setCoords(`${longitude},${latitude}`);
      setError(null);
    };

    const error = () => setError(ERRORS.DEFAULT.message);

    !navigator.geolocation
      ? setError(GEOLOCATION_ERROR)
      : navigator.geolocation.getCurrentPosition(success, error);

    return () => (isMounted = false);
  }, []);

  return { coords, error };
};

export default useUserCoordinates;
