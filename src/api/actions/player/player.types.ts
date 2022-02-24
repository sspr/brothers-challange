import { Discipline } from '../ranking/ranking.types';

export type PlayerWorkoutsResponse = {
  day: string;
  workouts: {
    type: Discipline;
    value: string;
    description?: string;
    elevation?: string;
  }[];
}[];
