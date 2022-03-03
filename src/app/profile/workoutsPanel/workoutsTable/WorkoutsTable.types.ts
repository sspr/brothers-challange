import { PlayerWorkoutsResponse } from 'api/actions/player/player.types';

export type WorkoutsTableProps = {
  data: PlayerWorkoutsResponse | undefined;
  monthNumber: number;
  isLoading: boolean;
  isError: boolean;
};

export type WorkoutsTableContainerProps = {
  monthNumber: number;
  name: string;
};
