import PropTypes from 'prop-types';
import { WEATHER_SYMBOL_BASE_URL } from '../common/constants';

const Current = ({
  cityName,
  current,
}) => {
  return (
          <section className="weather__current">
            <>
              <h1>{cityName}</h1>
              <img
                src={`${WEATHER_SYMBOL_BASE_URL}/${current.symbol}.png`}
                alt={current.symbolPhrase}
              />
              <h2>{current.temperature}°C</h2>
              <hr />
              <p>
                Cloudiness: <b>{current.cloudiness}%</b>
              </p>
              <p>
                Visibility: <b>{current.visibility} m</b>
              </p>
              <p>
                Pressure: <b>{current.pressure} hPa</b>
              </p>
              <p>
                Wind speed: <b>{current.windSpeed} m/s</b>
              </p>
              <p>
                Wind direction: <b>{current.windDirString}</b>
              </p>
            </>
          </section>
  );
};

Current.propTypes = {
  cityName: PropTypes.string.isRequired,
  current: PropTypes.object.isRequired,
};

export default Current;
