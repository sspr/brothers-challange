import { Discipline } from 'api/types';
import { calcPoints } from './calcPoints';

describe('calcPoints function', () => {
  it('converts activities values to points properly', () => {
    const activities = {
      bike: 3000,
      running: 3000,
      swimming: 3000,
      walking: 3000,
      elevation: 3000,
      other: 3000,
      pushUps: 3000,
      default: 3000,
    };

    const points = Object.fromEntries(
      Object.keys(activities).map((key) => [key, calcPoints(activities[key as Discipline], key)]),
    );

    expect(points).toStrictEqual({
      bike: 1000,
      running: 3000,
      swimming: 15000,
      walking: 3000,
      elevation: 30,
      other: 3000,
      pushUps: 0,
      default: 3000,
    });
  });
});
