import axios from 'axios';

import { AuthStorage } from 'context/auth/authStorage.enum';
import { requestAuthCheck } from './interceptors/requestAuthCheck/requestAuthCheck';
import { requestPascalToCamelCase } from './interceptors/requestPascalToCamelCase/requestPascalToCamelCase';

export const client = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    'Content-type': 'application/json',
  },
});

client.interceptors.response.use(
  (response) => requestPascalToCamelCase(response),
  (error) => Promise.reject(error),
);

client.interceptors.request.use(
  (config) => requestAuthCheck(config, localStorage.getItem(AuthStorage.TOKEN)),
  (error) => Promise.reject(error),
);
