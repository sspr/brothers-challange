import { getObjectEntries } from 'utils';
import { calculatePoints } from './calculatePoints';

describe('calculatePoints function', () => {
  it('converts activities values to points properly', () => {
    const activities = {
      bike: 3000,
      running: 3000,
      swimming: 3000,
      walking: 3000,
      elevation: 3000,
      other: 3000,
      pushUps: 3000,
    };

    const points = Object.fromEntries(
      getObjectEntries(activities).map(([key]) => [key, calculatePoints(activities[key], key)]),
    );

    expect(points).toStrictEqual({
      bike: 1000,
      running: 3000,
      swimming: 15,
      walking: 3000,
      elevation: 30,
      other: 3000,
      pushUps: 0,
    });
  });
});
