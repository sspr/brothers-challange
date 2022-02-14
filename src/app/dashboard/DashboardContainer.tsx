import { useQuery } from 'react-query';

import { getRanking } from 'api/actions/ranking/ranking';
import { Dashboard } from './Dashboard';
import { RankingResponse } from 'api/types';

export const DashboardContainer = () => {
  const { isLoading, isError, data } = useQuery<RankingResponse>('ranking', getRanking);

  return <Dashboard isLoading={isLoading} isError={isError} data={data} />;
};
