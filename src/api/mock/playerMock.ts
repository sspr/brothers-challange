import { PlayerResponse } from 'api/types';

export const PLAYER_MOCK: PlayerResponse[] = [
  {
    name: 'Marcin',
    avatar: 'https://picsum.photos/640/480?random=4946',
    score: '349,82',
    stats: {
      bike: 0,
      running: 192.6,
      swimming: 0,
      walking: 124.8,
      elevation: 4355,
      other: 0,
      pushUps: 510,
    },
  },
  {
    name: 'Michał',
    avatar: 'https://picsum.photos/640/480?random=4946',
    score: '360,95',
    stats: {
      bike: 0,
      running: 192.6,
      swimming: 0,
      walking: 124.8,
      elevation: 4355,
      other: 0,
      pushUps: 510,
    },
  },
];

export const GOAL_MOCK = {
  points: 2222,
  pushUps: 10000,
};
