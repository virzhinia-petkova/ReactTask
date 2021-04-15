export const kelvinToCelsius = kelvin => {
  const celsius = kelvin - 273;
  return Number(celsius.toFixed(1));
};

/**
 * groupQueryString
 * input: ?city=Monaco&id=102993458
 * output: { city: Monaco, id: 102993458}
 * @param {string} queryString
 * @returns {object}
 */
export const groupQueryString = queryString =>
  queryString
    .slice(1, queryString.length)
    .split('&')
    .reduce((acc, query) => {
      const [key, value] = query.split('=');
      acc[key] = value;
      return acc;
    }, {});

export const transformSpaces = string => string.city?.replace(/%20/g, ' ');

export const sortLocations = locations =>
  [...locations].sort((a, b) => a.country.localeCompare(b.country) || a.name.localeCompare(b.name));

export const areLocationsTheSame = (prevLocations, newLocations) => {
  if (!prevLocations[0]) {
    return false;
  }

  return newLocations.every((location, i) => {
    if (!prevLocations[i]) {
      return false;
    }

    return Object.keys(location).every(key => location[key] === prevLocations[i][key]);
  });
};
