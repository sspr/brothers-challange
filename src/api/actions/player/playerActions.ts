import { Action } from '../../types';

export const createGetPlayerDetailsAction = (playerName: string): Action => ({
  method: 'GET',
  url: `/player/${playerName}`,
});

export const createGetPlayerWorkoutsAction = (playerName: string, monthNumber: number): Action => ({
  method: 'GET',
  url: `/player/${playerName}/workouts/${monthNumber}`,
});
