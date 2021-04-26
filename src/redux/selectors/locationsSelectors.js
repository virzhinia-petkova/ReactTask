import { createSelector } from 'reselect';

const getLocations = state => state.locations.get('locations');
export const getIsLoading = state => state.locations.get('isLoading');

export const selectLocations = createSelector(getLocations, locations =>
  locations.map(location => ({
    ...location,
    fullName: `${location.name}, ${location.country}`
  }))
);
