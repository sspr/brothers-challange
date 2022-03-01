import {
  TableContainer,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Grid,
  Button,
  ButtonGroup,
} from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import { useLocale } from 'hooks';
import { Card, Chip, Spinner, UnitLabel } from 'ui';
import { calculatePoints } from 'utils/calculatePoints/calculatePoints';
import { styles } from './WorkoutsTable.styles';
import { WorkoutsTableProps } from './WorkoutsTable.types';
import { Discipline } from 'api/types';
import { Workout } from 'api/actions/player/player.types';

export const WorkoutsTable = ({ isError, isLoading, data, monthNumber, onArrowClick }: WorkoutsTableProps) => {
  const { formatMessage, formatDate } = useLocale();

  const date = new Date(2022, monthNumber);

  const calculatePointsWithElevation = (workout: Workout) =>
    workout?.elevation
      ? calculatePoints(workout.value, workout.type) + calculatePoints(workout.elevation, Discipline.ELEVATION)
      : calculatePoints(workout.value, workout.type);

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

  const totalScore = data
    .map((day) =>
      day.workouts
        .map((workout) => calculatePointsWithElevation(workout))
        .reduce((accumulator, currentValue) => accumulator + currentValue, 0),
    )
    .reduce((accumulator, currentValue) => accumulator + currentValue, 0)
    .toFixed(2);

  return (
    <Card>
      <Grid container direction="row" justifyContent="space-between" alignItems="center">
        <Grid item>
          <Typography variant="h6">
            {formatDate(date, {
              year: 'numeric',
              month: 'long',
            })}
          </Typography>
        </Grid>
        <Grid item>
          <ButtonGroup variant="contained" size="small" aria-label="outlined primary button group">
            <Button sx={styles.button} onClick={() => onArrowClick(-1)} disabled={date.getMonth() === 0}>
              <ArrowBackIosNewIcon sx={styles.arrow} />
            </Button>
            <Button sx={styles.button} onClick={() => onArrowClick(1)} disabled={new Date().getMonth() === monthNumber}>
              <ArrowForwardIosIcon sx={styles.arrow} />
            </Button>
          </ButtonGroup>
        </Grid>
      </Grid>
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
                    <Chip label={workout.type} description={workout?.description} />
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
    </Card>
  );
};
