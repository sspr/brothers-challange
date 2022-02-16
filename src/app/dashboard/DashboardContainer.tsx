import { useQuery } from 'api/hooks';
import { createGetRankingAction } from 'api/actions/ranking/rankingActions';
import { Dashboard } from './Dashboard';
import { RankingResponse } from 'api/types';

export const DashboardContainer = () => {
  const { isLoading, isError, data } = useQuery<RankingResponse>(createGetRankingAction());

  return <Dashboard isLoading={isLoading} isError={isError} data={data} />;
};
