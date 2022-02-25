import { AxiosRequestConfig } from 'axios';

export const requestAuthorization = (config: AxiosRequestConfig, bearer: string | null) => ({
  ...config,
  headers: { ...config.headers, Authorization: `Bearer ${bearer}` },
});
