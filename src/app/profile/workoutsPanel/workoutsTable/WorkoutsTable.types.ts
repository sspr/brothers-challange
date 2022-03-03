import { PlayerWorkoutsResponse } from 'api/actions/player/player.types';

export type WorkoutsTableProps = {
  data: PlayerWorkoutsResponse;
  monthNumber: number;
};

export type WorkoutsTableContainerProps = { monthNumber: number };
