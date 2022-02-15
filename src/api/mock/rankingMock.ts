import { RankingResponse } from 'api/types';

export const STATS_MOCK: Pick<RankingResponse, 'stats'> = {
  stats: {
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
  },
};

export const PLAYERS_MOCK: Pick<RankingResponse, 'players'> = {
  players: [
    {
      avatar: 'https://drive.google.com/file/d/1r4qzcis-qVe5gD0nJGq74DFRJlHbTh1Y/view?usp=sharing',
      name: 'Michał',
      score: 268.82,
    },
    {
      avatar: 'https://drive.google.com/file/d/1r4qzcis-qVe5gD0nJGq74DFRJlHbTh1Y/view?usp=sharing',
      name: 'Marcin',
      score: 268.81,
    },
  ],
};
