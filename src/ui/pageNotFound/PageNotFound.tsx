import { Typography } from '@mui/material';
import { Link } from 'react-router-dom';

import { Card } from 'ui';
import { PageNotFoundProps } from './PageNotFound.types';

export const PageNotFound = ({ linkTarget, linkText }: PageNotFoundProps) => {
  return (
    <Card>
      <Typography align="center">
        Page was not found. Click link to return back to <Link to={linkTarget}>{linkText}</Link>
      </Typography>
    </Card>
  );
};
