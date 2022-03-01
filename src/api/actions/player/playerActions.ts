import { Action } from '../../types';

export const createGetPlayerDetailsAction = (playerName: string | undefined): Action => ({
  method: 'GET',
  url: `/player/${playerName}`,
});

export const createGetPlayerWorkoutsAction = (playerName: string | undefined, monthNumber: number): Action => ({
  method: 'GET',
  url: `/player/${playerName}/workouts/${monthNumber}`,
});
