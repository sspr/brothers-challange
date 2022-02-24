import { Typography } from '@mui/material';
import { Link } from 'react-router-dom';

import { useLocale } from 'hooks';
import { Card } from 'ui';
import { PageNotFoundProps } from './PageNotFound.types';

export const PageNotFound = ({ linkTarget, linkText }: PageNotFoundProps) => {
  const { formatMessage } = useLocale();

  return (
    <Card>
      <Typography align="center">
        {formatMessage({ id: 'pageNotFound.message' })} <Link to={linkTarget}>{linkText}</Link>
      </Typography>
    </Card>
  );
};
