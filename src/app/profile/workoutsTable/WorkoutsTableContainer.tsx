import { useState } from 'react';

import { PLAYER_WORKOUTS_MOCK } from 'api/mock/playerWorkoutsMock';
import { WorkoutsTable } from './WorkoutsTable';

export const WorkoutsTableContainer = () => {
  const date = new Date();
  const [monthNumber, setMonthNumber] = useState(date.getMonth());

  const handleMonthChange = (change: number) => {
    if ((monthNumber > 0 || change > 0) && (monthNumber < date.getMonth() || change < 0)) {
      setMonthNumber((prevMonth) => prevMonth + change);
    }
  };

  return (
    <WorkoutsTable
      data={PLAYER_WORKOUTS_MOCK[monthNumber]}
      monthNumber={monthNumber}
      onArrowClick={handleMonthChange}
    />
  );
};
