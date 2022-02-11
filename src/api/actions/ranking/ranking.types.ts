export type PlayerStats = {
  name: string;
  score: number;
  cycling: number;
  running: number;
  swimming: number;
  walking: number;
  elevation: number;
  others: number;
  pushUps: number;
};

export enum Disciplines {
  BIKE = 'bike',
  RUNNING = 'running',
  SWIMMING = 'swimming',
  WALKING = 'walking',
  ELEVATION = 'elevation',
  OTHER = 'other',
  PUSHUPS = 'pushUps',
}

export type PlayerResponse = {
  avatar: string;
  name: string;
  score: number;
};

export type StatsResponse = {
  bike: number;
  elevation: number;
  other: number;
  pushUps?: number;
  push_ups?: number;
  running: number;
  swimming: number;
  walking: number;
};

export type RankingResponseData = {
  goal: number;
  players: PlayerResponse[];
  stats: Record<string, StatsResponse>;
};
