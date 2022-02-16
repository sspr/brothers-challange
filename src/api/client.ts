import axios from 'axios';

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
