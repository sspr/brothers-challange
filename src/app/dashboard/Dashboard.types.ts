import { RankingResponse } from 'api/types';

export type DashboardProps = {
  isLoading: boolean;
  isError: boolean;
  data: RankingResponse | undefined;
};
