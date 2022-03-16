import { Action } from '../../types';
import { WorkoutPayload } from './player.types';

export const createGetPlayerDetailsAction = (playerName: string): Action => ({
  method: 'GET',
  url: `/player/${playerName}`,
});

export const createGetPlayerWorkoutsAction = (playerName: string, monthNumber: number): Action => ({
  method: 'GET',
  url: `/player/${playerName}/workouts/${monthNumber}`,
});

export const createAddPlayerWorkoutAction = (
  playerName: string,
  monthNumber: number,
  workoutDetails: WorkoutPayload,
): Action => ({
  method: 'POST',
  url: `/player/${playerName}/workouts/${monthNumber}`,
  data: workoutDetails,
});
