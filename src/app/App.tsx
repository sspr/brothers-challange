import { useIntl } from 'react-intl';
import Button from '@mui/material/Button';

export const App = () => {
  const { formatMessage } = useIntl();

  return (
    <>
      <Button variant="contained">Button</Button>
      {formatMessage({ id: 'page.title' })}
    </>
  );
};
