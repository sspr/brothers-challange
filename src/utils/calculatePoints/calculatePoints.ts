import { Disciplines } from 'api/types';

const pointsMap = {
  bike: 1 / 3,
  running: 1,
  swimming: 5,
  walking: 1,
  elevation: 1 / 100,
  other: 1,
  pushUps: 0,
  default: 1,
};

export const calculatePoints = (value: number, discipline: Disciplines): number => {
  const converter = Object.keys(pointsMap).includes(discipline) ? pointsMap[discipline] : pointsMap['default'];

  return Number((value * converter).toFixed(2));
};
