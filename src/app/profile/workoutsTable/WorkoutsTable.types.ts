import { PlayerWorkoutsResponse } from 'api/actions/player/player.types';

export type WorkoutsTableProps = {
  data: PlayerWorkoutsResponse | undefined;
  monthNumber: number;
  onArrowClick: (month: number) => void;
  isLoading: boolean;
  isError: boolean;
};
