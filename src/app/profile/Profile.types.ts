import { PlayerResponse } from 'api/types';

export type ProfileProps = {
  isLoading: boolean;
  isError: boolean;
  goal: { points: number; pushUps: number };
  data: PlayerResponse | undefined;
};
