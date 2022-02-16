import { styled } from '@mui/material';
import { Link } from 'react-router-dom';

import { theme } from 'assets/styles/theme';

export const StyledLink = styled(Link)`
  color: ${theme.palette.common.white};
  text-decoration: none;
  font-weight: 400;

  &:active {
    font-weight: 400;
  }
`;

export const styles = {
  headerWrapper: { flexGrow: 1 },
  title: { flexGrow: 1 },
};
