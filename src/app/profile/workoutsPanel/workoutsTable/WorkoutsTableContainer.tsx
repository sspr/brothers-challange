import { PLAYER_WORKOUTS_MOCK } from 'api/mock/playerWorkoutsMock';
import { WorkoutsTable } from './WorkoutsTable';
import { WorkoutsTableContainerProps } from './WorkoutsTable.types';

export const WorkoutsTableContainer = ({ monthNumber }: WorkoutsTableContainerProps) => (
  <WorkoutsTable data={PLAYER_WORKOUTS_MOCK[monthNumber]} monthNumber={monthNumber} />
);
