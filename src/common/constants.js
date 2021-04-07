export const BASE_URL = 'https://pfa.foreca.com/api/v1';
export const WEATHER_SYMBOL_BASE_URL = 'https://developer.foreca.com/static/images/symbols';

export const ENTER_KEYCODE = 13;
export const MAX_ITEMS_LENGTH = 4;

export const ERRORS = {
  NOT_FOUND: {
    status: 404,
    message: 'Not Found'
  },
  AUTH_ERROR: {
    status: 401,
    message: 'Unauthorized'
  },
  DEFAULT: {
    status: '4xx/5xx',
    message: 'Oh, no, something went wrong'
  }
};

export const REQUEST_TYPES = {
  location: 'location',
  current: 'current'
};
