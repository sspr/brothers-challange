import { Player, Stats } from 'api/types';

export const STATS_MOCK: Record<string, Stats> = {
  Michał: {
    bike: 10.1,
    running: 142.7,
    swimming: 1.2,
    walking: 74.7,
    elevation: 1024,
    other: 12.1,
    pushUps: 390,
  },
  Marcin: {
    bike: 360.23,
    running: 42.5,
    swimming: 2.34,
    walking: 23.45,
    elevation: 2048,
    other: 50.56,
    pushUps: 265,
  },
};

export const PLAYERS_MOCK: Player[] = [
  {
    avatar: 'https://picsum.photos/640/480?random=4946',
    name: 'Michał',
    score: 268.82,
  },
  {
    avatar: 'https://picsum.photos/640/480?random=4946',
    name: 'Marcin',
    score: 268.81,
  },
];
