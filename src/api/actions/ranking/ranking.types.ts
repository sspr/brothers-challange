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

export type Stats = Record<Discipline, number>;

export type RankingResponse = {
  goals: { score: number; pushUps: number };
  players: Player[];
  stats: Record<string, Stats>;
};

export type PlayerResponse = {
  name: string;
  avatar: string;
  score: string;
  stats: Stats;
};
