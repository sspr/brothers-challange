import { Disciplines } from 'api/types';
import { styles } from './getChipBgColor.styles';
import { BackgroundColor } from './getChipBgColor.types';

export const getChipBgColor = (label: string): BackgroundColor => {
  const backgroundColor = Object.keys(styles.chipColor).includes(label)
    ? styles.chipColor[label as Disciplines]
    : styles.chipColor['default'];

  return backgroundColor;
};
