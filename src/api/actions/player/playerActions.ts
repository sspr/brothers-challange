import { Action } from '../../types';

export const createGetPlayerWorkoutAction = (monthNumber: number): Action => ({
  method: 'GET',
  url: `/player/Marcin/workouts/${monthNumber}`,
});
