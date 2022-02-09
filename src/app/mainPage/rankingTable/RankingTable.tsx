import { Typography } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import { useLocale } from 'hooks';
import { Container } from 'ui';
import { styles } from './RankingTable.styles';
import { RankingTableProps } from './RankingTable.types';

export const RankigTable = ({ data }: RankingTableProps) => {
  const { formatMessage } = useLocale();

  return (
    <Container>
      <Typography>{formatMessage({ id: 'rankingTable.summary' })}</Typography>
      <Table aria-label="simple table" sx={styles.table}>
        <TableHead>
          <TableRow>
            <TableCell></TableCell>
            <TableCell align="center">{formatMessage({ id: 'rankingTable.cycling' })}</TableCell>
            <TableCell align="center">{formatMessage({ id: 'rankingTable.running' })}</TableCell>
            <TableCell align="center">{formatMessage({ id: 'rankingTable.swimming' })}</TableCell>
            <TableCell align="center">{formatMessage({ id: 'rankingTable.walking' })}</TableCell>
            <TableCell align="center">{formatMessage({ id: 'rankingTable.others' })}</TableCell>
            <TableCell align="center">{formatMessage({ id: 'rankingTable.pushUps' })}</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((user) => (
            <TableRow key={user.name}>
              <TableCell sx={styles.header}>{user.name}</TableCell>
              <TableCell align="center">{user.cycling} km</TableCell>
              <TableCell align="center">{user.running} km</TableCell>
              <TableCell align="center">{user.swimming} km</TableCell>
              <TableCell align="center">{user.walking} km</TableCell>
              <TableCell align="center">
                {user.others} {formatMessage({ id: 'rankingTable.pts' })}
              </TableCell>
              <TableCell align="center">{user.pushUps}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Container>
  );
};
