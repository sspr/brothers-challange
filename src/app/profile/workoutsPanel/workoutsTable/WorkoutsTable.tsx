import { TableContainer, Typography, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';

import { useLocale } from 'hooks';
import { Card, Chip, Spinner, UnitLabel } from 'ui';
import { calculatePoints, getChipBgColor } from 'utils';
import { styles } from './WorkoutsTable.styles';
import { WorkoutsTableProps } from './WorkoutsTable.types';
import { Discipline } from 'api/types';
import { Workout } from 'api/actions/player/player.types';

export const WorkoutsTable = ({ isError, isLoading, data, monthNumber }: WorkoutsTableProps) => {
  const { formatMessage, formatDate } = useLocale();

  if (isLoading) {
    return (
      <Card>
        <Spinner />
      </Card>
    );
  }

  if (isError || !data) {
    return (
      <Card>
        <Typography align="center">{formatMessage({ id: 'error' })}</Typography>
      </Card>
    );
  }

  const date = new Date(Number(process.env.REACT_APP_YEAR), monthNumber);

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
                  <Chip
                    label={
                      workout?.description
                        ? workout?.description
                        : formatMessage({ id: `rankingTable.${workout.type}` })
                    }
                    backgroundColor={getChipBgColor(workout.type)}
                  />
                </TableCell>
                <TableCell>
                  {formatDate(date.setDate(day.day), {
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
                <TableCell align="right">{calculatePointsWithElevation(workout).toFixed(2)}</TableCell>
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
