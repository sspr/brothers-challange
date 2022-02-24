import { PlayerWorkoutsResponse } from 'api/actions/player/player.types';

export type WorkoutsTableProps = { data: PlayerWorkoutsResponse; onArrowClick: (month: number) => void };
