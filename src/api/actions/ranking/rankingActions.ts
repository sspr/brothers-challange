import { Action } from '../../types';

export const createGetRankingAction = (): Action => ({
  method: 'GET',
  url: '/board',
});
