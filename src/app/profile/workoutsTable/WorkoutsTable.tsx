import { TableContainer, Typography, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';

import { useLocale } from 'hooks';
import { Card, Chip, UnitLabel } from 'ui';
import { calcPoints } from 'utils/calcPoints';
import { styles } from './WorkoutsTable.styles';
import { WorkoutsTableProps } from './WorkoutsTable.types';

export const WorkoutsTable = ({ data, onArrowClick }: WorkoutsTableProps) => {
  const { formatMessage } = useLocale();

  return (
    <Card>
      <Typography>Month</Typography>
      <TableContainer>
        <Table aria-label="simple table" sx={styles.table}>
          <TableHead>
            <TableRow>
              <TableCell>{formatMessage({ id: 'profile.discipline' })}</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Distance</TableCell>
              <TableCell>Elevation</TableCell>
              <TableCell align="right">{formatMessage({ id: 'profile.points' })}</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((day) =>
              day.workouts.map((workout) => (
                <TableRow key={`Day${day.day}${workout.type}`}>
                  <TableCell>
                    <Chip label={workout.type} />
                  </TableCell>
                  <TableCell>{day.day} of month</TableCell>
                  <TableCell sx={styles.amount}>
                    {`${workout.value} `}
                    <UnitLabel discipline={workout.type} />
                  </TableCell>
                  <TableCell>
                    {workout?.elevation ? workout?.elevation : 0}
                    <UnitLabel discipline="elevation" />
                  </TableCell>
                  <TableCell align="right">{calcPoints(Number(workout.value), workout.type)}</TableCell>
                </TableRow>
              )),
            )}
            <TableRow>
              <TableCell sx={styles.total}>{formatMessage({ id: 'profile.total' })}</TableCell>
              <TableCell sx={styles.total}></TableCell>
              <TableCell sx={styles.total}></TableCell>
              <TableCell sx={styles.total}></TableCell>
              <TableCell sx={styles.total} align="right">
                Total month
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Card>
  );
};
