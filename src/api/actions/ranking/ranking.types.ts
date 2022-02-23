export enum Disciplines {
  BIKE = 'bike',
  RUNNING = 'running',
  SWIMMING = 'swimming',
  WALKING = 'walking',
  ELEVATION = 'elevation',
  OTHER = 'other',
  PUSHUPS = 'pushUps',
}

export type Player = {
  avatar: string;
  name: string;
  score: number;
};

export type Discipline = 'bike' | 'running' | 'swimming' | 'walking' | 'elevation' | 'other' | 'pushUps';

export type Stats = Record<string, Record<Discipline, number>>;

export type RankingResponse = {
  goal: number;
  players: Player[];
  stats: Stats;
};

export type PlayerResponse = {
  name: string;
  avatar: string;
  score: string;
  stats: Record<Discipline, number>;
};
