import { AxiosRequestConfig } from 'axios';

export type Action = Required<Pick<AxiosRequestConfig, 'method' | 'url'>> &
  Omit<AxiosRequestConfig, 'method' | 'url' | 'baseUrl'>;

export * from './actions/ranking/ranking.types';
export * from './actions/auth/auth.types';
