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
  CYCLING = 'cycling',
  RUNNING = 'running',
  SWIMMING = 'swimming',
  WALKING = 'walking',
  ELEVATION = 'elevation',
  OTHER = 'others',
  PUSHUPS = 'pushUps',
}
