import { Action } from '../../types';

export const createGetRanking = (): Action => ({
  method: 'GET',
  url: '/board',
});
