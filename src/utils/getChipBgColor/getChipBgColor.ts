import { Disciplines } from 'api/types';
import { styles } from './getChipBgColor.styles';

type BGC = { backgroundColor: string };

export const getChipBgColor = (label: string): BGC => {
  const backgroundColor = Object.keys(styles.chipColor).includes(label)
    ? styles.chipColor[label as Disciplines]
    : styles.chipColor['default'];

  return backgroundColor;
};
