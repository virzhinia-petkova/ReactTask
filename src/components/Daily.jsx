import PropTypes from 'prop-types';

import { WEATHER_SYMBOL_BASE_URL } from '../common/constants';

const Daily = ({
  daily
}) => (
          <section className="weather__days">
            {daily.map(day => (
              <div className="weather__days__daily" key={day.date}>
                <h3>{new Date(day.date).toDateString().slice(0, 3)}</h3>
                <img src={`${WEATHER_SYMBOL_BASE_URL}/${day.symbol}.png`} alt={day.symbolPhrase} />
                <p>
                  <b>{day.minTemp}°C</b> | <b>{day.maxTemp}°C</b>
                </p>
                <p>
                  Rain: <b>{day.precipProb}%</b>
                </p>
                <p>
                  Wind: <b>{day.maxWindSpeed} m/s</b>
                </p>
              </div>
            ))}
          </section>
  );

  Daily.propTypes = {
  daily: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Daily;
