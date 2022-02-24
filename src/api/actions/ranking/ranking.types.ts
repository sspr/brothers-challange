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

export type Stats = {
  bike: number;
  elevation: number;
  other: number;
  pushUps: number;
  running: number;
  swimming: number;
  walking: number;
};

export type RankingResponse = {
  goal: number;
  players: Player[];
  stats: Record<string, Stats>;
};

export type PlayerResponse = {
  name: string;
  avatar: string;
  score: string;
  stats: Stats;
};
