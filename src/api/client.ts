import axios, { AxiosResponse } from 'axios';

import { requestPascalToCamelCase } from './interceptors/requestPascalToCamelCase/requestPascalToCamelCase';
import { RankingResponse } from './types';

export const client = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    'Content-type': 'application/json',
  },
});

client.interceptors.response.use(
  (response) => requestPascalToCamelCase<AxiosResponse<RankingResponse>>(response),
  (error) => Promise.reject(error),
);
