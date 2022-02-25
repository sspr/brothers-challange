export enum Discipline {
  BIKE = 'bike',
  RUNNING = 'running',
  SWIMMING = 'swimming',
  WALKING = 'walking',
  ELEVATION = 'elevation',
  OTHER = 'other',
  PUSHUPS = 'pushUps',
}

export type Disciplines = Exclude<Lowercase<keyof typeof Discipline>, 'pushups'> | 'pushUps';

export type Player = {
  avatar: string;
  name: string;
  score: number;
};

export type Stats = Record<Discipline, number>;

export type RankingResponse = {
  goal: number;
  players: Player[];
  stats: Record<string, Stats>;
};

export type PlayerResponse = {
  name: string;
  avatar: string;
  score: number;
  stats: Stats;
};
