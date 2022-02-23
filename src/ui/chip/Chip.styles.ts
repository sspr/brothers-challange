import { theme } from 'assets/styles/theme';

export const styles = {
  chipColor: {
    bike: { backgroundColor: theme.palette.primary.main },
    running: { backgroundColor: theme.color.green },
    swimming: { backgroundColor: theme.color.blue },
    walking: { backgroundColor: theme.color.grey },
    elevation: { backgroundColor: theme.color.orange },
    other: { backgroundColor: theme.color.purple },
    pushUps: { backgroundColor: theme.color.red },
    default: { backgroundColor: theme.palette.primary.dark },
  },
  chip: { color: theme.palette.common.white },
};
