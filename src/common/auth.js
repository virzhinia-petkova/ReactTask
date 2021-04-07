import axios from 'axios';
import { areRequestsCanceled } from './axios-config';
import { ERRORS } from './constants';

export const refreshAccessToken = async () => {
  try {
    const {
      data: { access_token }
    } = await axios.post('/auth');
    sessionStorage.setItem('token', JSON.stringify(access_token));
    return access_token;
  } catch (error) {
    areRequestsCanceled(error) || alert(ERRORS.DEFAULT.message);
  }
};
