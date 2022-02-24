import { TableContainer, Typography, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';

import { useLocale } from 'hooks';
import { Card, Chip, UnitLabel } from 'ui';
import { styles } from './SummaryTable.styles';
import { SummaryTableProps } from './SummaryTable.types';
import { calcPoints } from 'utils/calcPoints';

export const SummaryTable = ({ data }: SummaryTableProps) => {
  const { formatMessage } = useLocale();

  return (
    <Card>
      <Typography>{formatMessage({ id: 'rankingTable.summary' })}</Typography>
      <TableContainer>
        <Table aria-label="simple table" sx={styles.table}>
          <TableHead>
            <TableRow>
              <TableCell>{formatMessage({ id: 'profile.discipline' })}</TableCell>
              <TableCell>{formatMessage({ id: 'profile.amount' })}</TableCell>
              <TableCell align="right">{formatMessage({ id: 'profile.points' })}</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {Object.entries(data.stats).map(([key, value]) => (
              <TableRow key={key}>
                <TableCell>
                  <Chip label={key} />
                </TableCell>
                <TableCell sx={styles.amount}>
                  {`${value} `}
                  <UnitLabel discipline={key} />
                </TableCell>
                <TableCell align="right">{calcPoints(value, key)}</TableCell>
              </TableRow>
            ))}
            <TableRow>
              <TableCell sx={styles.total}>{formatMessage({ id: 'profile.total' })}</TableCell>
              <TableCell sx={styles.total}></TableCell>
              <TableCell sx={styles.total} align="right">
                {data.score}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Card>
  );
};
