import { RankingResponse } from 'api/types';

export type Data = RankingResponse & {
  stats: Record<
    string,
    {
      pushUps: number;
    }
  >;
};

export type DashboardProps = {
  isLoading: boolean;
  isError: boolean;
  data: Data | undefined;
};
