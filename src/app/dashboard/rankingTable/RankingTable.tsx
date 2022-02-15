import { TableContainer, Typography } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import { Disciplines } from 'api/types';
import { useLocale } from 'hooks';
import { Card } from 'ui';
import { styles } from './RankingTable.styles';
import { RankingTableProps } from './RankingTable.types';

export const RankingTable = ({ stats }: RankingTableProps) => {
  const { formatMessage } = useLocale();

  return (
    <Card>
      <Typography>{formatMessage({ id: 'rankingTable.summary' })}</Typography>
      <TableContainer>
        <Table aria-label="simple table" sx={styles.table}>
          <TableHead>
            <TableRow>
              <TableCell></TableCell>
              {Object.values(Disciplines).map((discipline) => (
                <TableCell key={discipline} align="center">
                  {formatMessage({ id: `rankingTable.${discipline}` })}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {Object.keys(stats).map((user) => (
              <TableRow key={user}>
                <TableCell sx={styles.header}>{user.replace(/(^.)/g, (match) => match.toUpperCase())}</TableCell>
                <TableCell align="center">
                  {stats[user].bike}{' '}
                  <Typography variant="caption" sx={styles.units}>
                    km
                  </Typography>
                </TableCell>
                <TableCell align="center">
                  {stats[user].running}{' '}
                  <Typography variant="caption" sx={styles.units}>
                    km
                  </Typography>
                </TableCell>
                <TableCell align="center">
                  {stats[user].swimming}{' '}
                  <Typography variant="caption" sx={styles.units}>
                    km
                  </Typography>
                </TableCell>
                <TableCell align="center">
                  {stats[user].walking}{' '}
                  <Typography variant="caption" sx={styles.units}>
                    km
                  </Typography>
                </TableCell>
                <TableCell align="center">
                  {stats[user].elevation}{' '}
                  <Typography variant="caption" sx={styles.units}>
                    m
                  </Typography>
                </TableCell>
                <TableCell align="center">
                  {stats[user].other}{' '}
                  <Typography variant="caption" sx={styles.units}>
                    {formatMessage({ id: 'rankingTable.pts' })}
                  </Typography>
                </TableCell>
                <TableCell align="center">{stats[user].pushUps}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Card>
  );
};
