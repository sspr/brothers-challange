import { useIntl } from 'react-intl';
import Button from '@mui/material/Button';

import { theme } from 'assets/styles/theme';

export const App = () => {
  const { formatMessage } = useIntl();

  return (
    <>
      {formatMessage({ id: 'page.title' })}
      <br />
      <Button variant="contained" sx={{ backgroundColor: theme.color.green }} color="primary">
        Button
      </Button>
    </>
  );
};
