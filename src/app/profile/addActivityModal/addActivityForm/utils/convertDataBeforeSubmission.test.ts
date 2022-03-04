import { Discipline } from 'api/types';
import { convertDataBeforeSubmission } from './convertDataBeforeSubmission';

describe('convertDataBeforeSubmission function', () => {
  it('converts data properly', () => {
    const data = {
      date: new Date(),
      discipline: Discipline.OTHER,
      value: '10',
      description: 'description',
    };

    expect(convertDataBeforeSubmission(data)).toStrictEqual({
      day: new Date().getDate(),
      type: Discipline.OTHER,
      value: 10,
      description: 'description',
      elevation: undefined,
    });
  });
});
