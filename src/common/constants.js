export const BASE_URL = 'https://pfa.foreca.com/api/v1';

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

export const GEOLOCATION_ERROR =
  'Geolocation is not supported by your browser. Please search your city by name.';
export const USER_LOOCATION = 'your location';
