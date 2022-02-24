import { Breadcrumbs, Divider, Paper, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

import { useLocale } from 'hooks';
import { AppRoute } from 'routing/AppRoute.enum';
import { styles } from './PageTitle.styles';
import { PageTitleProps } from './PageTitle.types';

export const PageTitle = ({ title }: PageTitleProps) => {
  const { formatMessage } = useLocale();

  return (
    <>
      <Paper elevation={0} sx={styles.header}>
        <Typography variant="h5">{title}</Typography>
        <Paper elevation={0} sx={styles.breadcrumbs}>
          <Breadcrumbs aria-label="breadcrumb">
            <Typography fontSize="small">
              <Link to={AppRoute.HOME}>{formatMessage({ id: 'title.dashboard' })}</Link>
            </Typography>
            <Typography color="text.primary" fontSize="small">
              {title}
            </Typography>
          </Breadcrumbs>
        </Paper>
      </Paper>
      <Divider sx={styles.divider} />
    </>
  );
};
