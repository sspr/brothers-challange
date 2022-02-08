import Button from '@mui/material/Button';

import { theme } from 'assets/styles/theme';
import { useLocale } from 'hooks';

export const App = () => {
  const { formatMessage } = useLocale();

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
