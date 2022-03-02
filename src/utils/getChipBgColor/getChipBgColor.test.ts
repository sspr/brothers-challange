import { Discipline } from 'api/types';
import { getChipBgColor } from './getChipBgColor';
import { styles } from './getChipBgColor.styles';

describe('getChipBgColor function', () => {
  it('get proper background colors for known disciplines', () => {
    Object.values(Discipline).forEach((value) => {
      expect(getChipBgColor(value)).toStrictEqual(styles.chipColor[value]);
    });
  });

  it('get proper background colors for unknown discipline', () => {
    expect(getChipBgColor('Koszykówka')).toStrictEqual(styles.chipColor.default);
  });
});
