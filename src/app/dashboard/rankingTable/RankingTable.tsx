import { TableContainer, Typography } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Link } from 'react-router-dom';

import { Disciplines } from 'api/types';
import { useLocale } from 'hooks';
import { Card, UnitLabel } from 'ui';
import { styles } from './RankingTable.styles';
import { RankingTableProps } from './RankingTable.types';
import { capitalizeFirstLetter } from './RankingTable.utils';

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
                <TableCell sx={styles.header}>
                  <Link to={`/${capitalizeFirstLetter(user)}`}>{capitalizeFirstLetter(user)}</Link>
                </TableCell>
                <TableCell align="center">
                  {stats[user].bike} <UnitLabel discipline="bike" />
                </TableCell>
                <TableCell align="center">
                  {stats[user].running} <UnitLabel discipline="running" />
                </TableCell>
                <TableCell align="center">
                  {stats[user].swimming} <UnitLabel discipline="swimming" />
                </TableCell>
                <TableCell align="center">
                  {stats[user].walking} <UnitLabel discipline="walking" />
                </TableCell>
                <TableCell align="center">
                  {stats[user].elevation} <UnitLabel discipline="elevation" />
                </TableCell>
                <TableCell align="center">
                  {stats[user].other} <UnitLabel discipline="other" />
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
