import { useState } from 'react';
import { useParams } from 'react-router-dom';

import { WorkoutsTable } from './WorkoutsTable';
import { useQuery } from 'api/hooks';
import { PlayerWorkoutsResponse } from 'api/actions/player/player.types';
import { createGetPlayerWorkoutsAction } from 'api/actions/player/playerActions';

export const WorkoutsTableContainer = () => {
  const date = new Date();
  const [monthNumber, setMonthNumber] = useState(date.getMonth());
  const { name } = useParams();

  const { isLoading, isError, data } = useQuery<PlayerWorkoutsResponse>(
    createGetPlayerWorkoutsAction(name, monthNumber + 1),
  );

  const handleMonthChange = (change: number) => {
    if ((monthNumber > 0 || change > 0) && (monthNumber < date.getMonth() || change < 0)) {
      setMonthNumber((prevMonth) => prevMonth + change);
    }
  };

  return (
    <WorkoutsTable
      data={data}
      monthNumber={monthNumber}
      onArrowClick={handleMonthChange}
      isLoading={isLoading}
      isError={isError}
    />
  );
};
