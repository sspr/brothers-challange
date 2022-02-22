import { Avatar, Typography } from '@mui/material';

import { useLocale } from 'hooks';
import { Card } from 'ui';
import { styles } from './Details.styles';
import { DetailsProps } from './Details.types';

export const Details = ({ name, avatar }: DetailsProps) => {
  const { formatMessage } = useLocale();

  return (
    <>
      <Card>
        <Avatar sx={styles.avatar} alt={`${formatMessage({ id: 'profile.picture' })} ${name}`} src={avatar} />
        <Typography sx={styles.caption} align="center">
          {name}
        </Typography>
      </Card>
    </>
  );
};
