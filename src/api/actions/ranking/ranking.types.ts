export enum Disciplines {
  BIKE = 'bike',
  RUNNING = 'running',
  SWIMMING = 'swimming',
  WALKING = 'walking',
  ELEVATION = 'elevation',
  OTHER = 'other',
  PUSHUPS = 'pushUps',
}

export type RankingResponse = {
  goal: number;
  players: {
    avatar: string;
    name: string;
    score: number;
  }[];
  stats: Record<
    string,
    {
      bike: number;
      elevation: number;
      other: number;
      push_ups: number;
      running: number;
      swimming: number;
      walking: number;
    }
  >;
};
