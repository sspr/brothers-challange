import { WorkoutsTable } from './WorkoutsTable';
import { useQuery } from 'api/hooks';
import { PlayerWorkoutsResponse } from 'api/actions/player/player.types';
import { createGetPlayerWorkoutsAction } from 'api/actions/player/playerActions';
import { WorkoutsTableContainerProps } from './WorkoutsTable.types';

export const WorkoutsTableContainer = ({ monthNumber, name }: WorkoutsTableContainerProps) => {
  const { isLoading, isError, data } = useQuery<PlayerWorkoutsResponse>(
    createGetPlayerWorkoutsAction(name, monthNumber + 1),
    { refetchOnWindowFocus: true },
  );

  return <WorkoutsTable data={data} monthNumber={monthNumber} isLoading={isLoading} isError={isError} />;
};
