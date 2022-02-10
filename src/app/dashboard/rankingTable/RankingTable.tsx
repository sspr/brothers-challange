import { Typography } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import { Disciplines } from 'api/ranking/ranking.types';
import { useLocale } from 'hooks';
import { Card } from 'ui';
import { styles } from './RankingTable.styles';
import { RankingTableProps } from './RankingTable.types';

export const RankingTable = ({ data }: RankingTableProps) => {
  const { formatMessage } = useLocale();

  return (
    <Card>
      <Typography>{formatMessage({ id: 'rankingTable.summary' })}</Typography>
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
          {data.map((user) => (
            <TableRow key={user.name}>
              <TableCell sx={styles.header}>{user.name}</TableCell>
              <TableCell align="center">{user.cycling} km</TableCell>
              <TableCell align="center">{user.running} km</TableCell>
              <TableCell align="center">{user.swimming} km</TableCell>
              <TableCell align="center">{user.walking} km</TableCell>
              <TableCell align="center">{user.elevation} m</TableCell>
              <TableCell align="center">
                {user.others} {formatMessage({ id: 'rankingTable.pts' })}
              </TableCell>
              <TableCell align="center">{user.pushUps}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  );
};
