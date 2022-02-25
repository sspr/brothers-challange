import axios from 'axios';

import { AuthStorage } from 'context/auth/authStorage.enum';
import { requestAuthorization } from './interceptors/requestAuthorization/requestAuthorization';
import { responsePascalToCamelCase } from './interceptors/responsePascalToCamelCase/responsePascalToCamelCase';

export const client = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    'Content-type': 'application/json',
  },
});

client.interceptors.response.use(
  (response) => responsePascalToCamelCase(response),
  (error) => Promise.reject(error),
);

client.interceptors.request.use(
  (config) => requestAuthorization(config, localStorage.getItem(AuthStorage.TOKEN)),
  (error) => Promise.reject(error),
);
