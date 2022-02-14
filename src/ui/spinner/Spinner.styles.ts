import { Box, keyframes, styled } from '@mui/material';

import { theme } from 'assets/styles/theme';

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
  width: ${theme.spacing(4.5)};
  height: ${theme.spacing(4.5)};
  margin: auto;

  &:after {
    content: ' ';
    display: block;
    width: ${theme.spacing(4)};
    height: ${theme.spacing(4)};
    margin: ${theme.spacing(1)};
    border-radius: 50%;
    border: ${theme.spacing(0.75)} solid ${theme.color.grey};
    border-color: ${theme.color.grey} ${theme.color.grey} transparent transparent;
    animation: ${rotate} 1.2s linear infinite;
  }
`;
