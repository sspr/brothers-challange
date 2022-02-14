import axios, { AxiosResponse } from 'axios';

import { requestPascalToCamelCase } from './interceptors/requestPascalToCamelCase/requestPascalToCamelCase';
import { RankingResponse } from './types';

export const client = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  timeout: 5000,
});

client.interceptors.response.use(
  (response) =>
    requestPascalToCamelCase<
      AxiosResponse<RankingResponse>,
      AxiosResponse<RankingResponse & { stats: Record<string, { pushUps: string }> }>
    >(response),
  (error) => Promise.reject(error),
);
