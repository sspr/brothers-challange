import { Disciplines } from '../ranking/ranking.types';

export type Workout = {
  type: Disciplines;
  value: number;
  description?: string;
  elevation?: number;
};

export type PlayerWorkoutsResponse = {
  day: number;
  workouts: Workout[];
}[];
