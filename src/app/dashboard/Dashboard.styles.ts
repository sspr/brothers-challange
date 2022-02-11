import { Box, styled, keyframes } from '@mui/material';

import { theme } from 'assets/styles/theme';

export const styles = {
  container: {
    mt: 0,
  },
  item: { width: 6 },
};

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const Spinner = styled(Box)`
  display: block;
  width: 40px;
  height: 40px;
  margin: auto;

  &:after {
    content: ' ';
    display: block;
    width: 32px;
    height: 32px;
    margin: 4px;
    border-radius: 50%;
    border: 6px solid ${theme.color.grey};
    border-color: ${theme.color.grey} ${theme.color.grey} transparent transparent;
    animation: ${rotate} 1.2s linear infinite;
  }
`;
