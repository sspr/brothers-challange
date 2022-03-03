import { createGetRankingAction } from 'api/actions/ranking/rankingActions';
import { useQuery } from 'api/hooks';
import { RankingResponse } from 'api/types';
import { Goals } from './Goals';

export const GoalsContainer = () => {
  const { isLoading, isError, data } = useQuery<RankingResponse>(createGetRankingAction());

  return <Goals goals={data?.goals} isLoading={isLoading} isError={isError} />;
};
