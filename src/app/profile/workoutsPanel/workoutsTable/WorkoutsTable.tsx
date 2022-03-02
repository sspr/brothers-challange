import { TableContainer, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';

import { useLocale } from 'hooks';
import { DisciplineChip, UnitLabel } from 'ui';
import { calculatePoints } from 'utils';
import { styles } from './WorkoutsTable.styles';
import { WorkoutsTableProps } from './WorkoutsTable.types';
import { Discipline, Workout } from 'api/types';

export const WorkoutsTable = ({ data, monthNumber }: WorkoutsTableProps) => {
  const { formatMessage, formatDate } = useLocale();

  const activeDate = new Date(Number(process.env.REACT_APP_YEAR), monthNumber);

  const calculatePointsWithElevation = (workout: Workout) =>
    workout?.elevation
      ? calculatePoints(workout.value, workout.type) + calculatePoints(workout.elevation, Discipline.ELEVATION)
      : calculatePoints(workout.value, workout.type);

  const totalScore = data
    .map((day) =>
      day.workouts
        .map((workout) => calculatePointsWithElevation(workout))
        .reduce((accumulator, currentValue) => accumulator + currentValue, 0),
    )
    .reduce((accumulator, currentValue) => accumulator + currentValue, 0)
    .toFixed(2);

  return (
    <TableContainer>
      <Table aria-label="simple table" sx={styles.table}>
        <TableHead>
          <TableRow>
            <TableCell>{formatMessage({ id: 'profile.discipline' })}</TableCell>
            <TableCell>{formatMessage({ id: 'profile.date' })}</TableCell>
            <TableCell>{formatMessage({ id: 'profile.amount' })}</TableCell>
            <TableCell>{formatMessage({ id: 'rankingTable.elevation' })}</TableCell>
            <TableCell align="right">{formatMessage({ id: 'profile.points' })}</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((day) =>
            day.workouts.map((workout) => (
              <TableRow key={`Day${day.day}${workout.type}`}>
                <TableCell>
                  <DisciplineChip label={workout?.description ? workout?.description : workout.type} />
                </TableCell>
                <TableCell>
                  {formatDate(activeDate.setDate(day.day), {
                    day: 'numeric',
                    month: 'long',
                  })}
                </TableCell>
                <TableCell sx={styles.amount}>
                  {`${workout.value} `}
                  <UnitLabel discipline={workout.type} />
                </TableCell>
                <TableCell>
                  {workout?.elevation ? workout?.elevation : 0} <UnitLabel discipline={Discipline.ELEVATION} />
                </TableCell>
                <TableCell align="right">{calculatePointsWithElevation(workout)}</TableCell>
              </TableRow>
            )),
          )}
          <TableRow>
            <TableCell sx={styles.total}>{`${formatMessage({ id: 'profile.total' })}:`}</TableCell>
            <TableCell sx={styles.total}></TableCell>
            <TableCell sx={styles.total}></TableCell>
            <TableCell sx={styles.total}></TableCell>
            <TableCell sx={styles.total} align="right">
              {totalScore}
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};
